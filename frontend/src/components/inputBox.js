import React,{useState, useEffect} from 'react';
import Records from "../output.json";
import axios from "axios";
import "./inputbox.css";

const InputBox = () => {
    const [url, setUrl] = useState("");

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
      const result = await axios.get("http://127.0.0.1:8000/api/student/video?id=" + url)
      console.log(result);

    }
    catch (error) {
      console.log(error);
    }
  }
  
  return (
    <>
      
    <div className="Box" >
        <div className='form'>
            <h1>Time Stamp Generator</h1>
            <form  onSubmit={handleSubmit}>
                <div className="form-control">
                {/* <label>Enter youtube link</label> */}
                <input
                    type="text"
                    name="url"
                    placeholder="Enter youtube link"
                    value={url}
                    onChange={handleInputChange}
                />
                </div>
                <div className="form-control">
                <button onClick={handleClick}>Generate</button>
                {/* <button onClick={handleClick}>Extract</button> */}
                </div>
            </form>
        </div>
        <div className='output'>
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
                  } */}
              </div>
            )
          })
        }
        </div>
    </div>
    </>
  );
}

export default InputBox;