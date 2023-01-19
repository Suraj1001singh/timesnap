import json
import time
import requests
import youtube_dl
import logging
import sys
from datetime import datetime
logging.basicConfig(level=logging.INFO)


API_KEY = '04765ec5a2f04634b6084db57349ea9c'


class AutoYouTubeTimestamp:
    def __init__(self):
        self.__endpoint_upload = 'https://api.assemblyai.com/v2/upload'
        self.__endpoint_transcript = 'https://api.assemblyai.com/v2/transcript'
        self.__headers_auth = {
            'authorization': API_KEY
        }
        self.__headers = {
            'authorization': API_KEY,
            'content-type': 'application/json'
        }
        self.__chunk_size = 5242880

    # CONVERT VIDEO TO AUDIO FILE
    def __downloadAudio(self, video_url):
        video_info = youtube_dl.YoutubeDL().extract_info(url=video_url, download=False)
        filename = f"{video_info['title']}.mp3"
        options = {
            'format': 'bestaudio/best',
            'keepvideo': False,
            'outtmpl': filename,
        }
        with youtube_dl.YoutubeDL(options) as ydl:
            ydl.download([video_info['webpage_url']])
        print("Download complete... {}".format(filename))
        return filename

   # UPLOAD AUDIO TO  SERVER
    def __upload(self, filename: str) -> str:
        def read_file(filename: str):
            with open(filename, 'rb') as f:
                while True:
                    data = f.read(self.__chunk_size)
                    if not data:
                        break
                    yield data

        logging.info(f"{datetime.now()} - Started uploading audio file...")
        upload_response = requests.post(
            url=self.__endpoint_upload,
            headers=self.__headers_auth,
            data=read_file(filename)
        )
        logging.info(
            f"{datetime.now()} - Audio file uploaded! URL = {upload_response.json()['upload_url']}")
        return upload_response.json()['upload_url']

   # TRANSCRIBE AUDIO TO TEXT
    def __transcribe(self, audio_url: str) -> str:
        logging.info(f"{datetime.now()} - Started transcribing audio file...")

        transcript_response = requests.post(
            url=self.__endpoint_transcript,
            headers=self.__headers,
            json={
                'audio_url': audio_url,
                'auto_chapters': True,
                'auto_highlights': True
            }
        )
        logging.info(
            f"{datetime.now()} - Audio file transcribed! ID = {transcript_response.json()['id']}")
        return transcript_response.json()['id']

    #POLLING RESPONSES
    def __poll(self, transcript_id: str) -> None:
        def get_response(transcript_id: str):
            polling_endpoint = f"{self.__endpoint_transcript}/{transcript_id}"
            polling_response = requests.get(
                url=polling_endpoint,
                headers=self.__headers
            )
            return polling_response

        def save(transcript_id: str):
            fname_transcript = f"{transcript_id}.txt"
            fname_chapters = f"{transcript_id}_chapters.json"
            fname_highlights = f"{transcript_id}_highlights.json"

            with open(fname_transcript, 'w') as f:
                f.write(polling_response.json()['text'])
                logging.info(
                    f"{datetime.now()} - Transcript saved to {fname_transcript}")

            with open(fname_chapters, 'w') as f:
                chapters = polling_response.json()['chapters']
                json.dump(chapters, f, indent=4)
                logging.info(
                    f"{datetime.now()} - Transcript chapters saved to {fname_chapters}")

            with open(fname_highlights, 'w') as f:
                highlights = polling_response.json()['auto_highlights_result']
                json.dump(highlights, f, indent=4)
                logging.info(
                    f"{datetime.now()} - Transcript highlights saved to {fname_highlights}")

            logging.info(f"{datetime.now()} - All files saved successfully")

        finished = False
        while not finished:
            polling_response = get_response(transcript_id=transcript_id)
            if polling_response.json()['status'] == 'completed':
                save(transcript_id=transcript_id)
                finished = True
            else:
                logging.warning(
                    f"{datetime.now()} - Transcribing still in progress - Trying again in 30 seconds.")
                time.sleep(30)
    # DRIVING FUNCTION
    def run(self, link) -> None:
        filename = self.__downloadAudio(link)
        audio_url = self.__upload(filename)
        transcribe_id = self.__transcribe(audio_url)
        self.__poll(transcribe_id)


ats = AutoYouTubeTimestamp()
ats.run(sys.argv[1])
