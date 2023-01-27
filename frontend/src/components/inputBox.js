import React,{useState, useEffect} from 'react';
import Records from "../output.json";
import axios from "axios";
import "./inputbox.css";
import ReactPlayer from 'react-player/youtube'
import VideoAnalysis from './VideoAnalysis';

const InputBox = () => {
    const [url, setUrl] = useState("");
    const [summary, setsummary] = useState("");
    const [category, setcategory] = useState("123");
    const [output, setoutput] = useState([]);
    const [videoplayer, setvideoplayer] = useState("");

    useEffect(() => {
     console.log(output);
    }, [output]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setUrl(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(state);
  };

  const handleClick = async()=>{
    try {
      setvideoplayer(url);
      const result = await axios.get("http://127.0.0.1:8000/api/student/video?id=" + url)
      console.log(result.data.output);
      setoutput(JSON.parse(result.data.output))

    }
    catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      
    <div className="Box input_text" >
        <div className='form'>
            <h1 style={{color:'#aa2727'}}>Time Stamp Generator</h1>
            
                <div style={{marginTop:'5%'}} className="form-control">
                {/* <label>Enter youtube link</label> */}
                <input
                    type="text"
                    name="url"
                    placeholder="Enter youtube link"
                    value={url}
                    onChange={handleInputChange}
                />
                </div>
                
                <button style={{marginTop:'5%'}} onClick={handleClick}>Generate</button>
                {/* <button onClick={handleClick}>Extract</button> */}
                
       
        </div>

        
        {/*
          category && <div>Category: {category}</div>
        }
        {
          summary && <div>Summary: {summary}</div>
        }
        
        { 
         
          Records && Records.map( record => {
            return(
              <div className='box2' key={record.id}>
                <h2 className='title'>{record.title}</h2><br/>
                <p className='summary'>{record.summary}</p><br/>
                  {/* {
                    Records.timestamp.map( (time,i) => {
                      return(
                        <div key={i}>
                          {time.t1}<br/>
                          {time.t2}<br/>
                        </div>
                      )
                    })
                  } }
              </div>
            )
          })*/
        }
        
    </div>
    <hr/>
    <div style={{marginTop:'50px'}}>
        {
          output.length > 0 && <VideoAnalysis play = {videoplayer} setplay={setvideoplayer} output={output} url={url}/>
        }
        </div>
    </>
  );
}

export default InputBox;