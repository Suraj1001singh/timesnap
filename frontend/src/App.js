
/*import './App.css';
import { useState, useEffect } from 'react';
import axios from "axios";
function App() {
  const [students, setstudents] = useState([]);

  useEffect(() => {
    async function getAllStudent(){
      try {
        const students = await axios.get("http://127.0.0.1:8000/api/student/")
        console.log(students.data);
        setstudents(students.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    getAllStudent()
  }, []);
  return (
    <div className="App">
      <h1>Connect React JS to Django</h1>
    </div>
  );
}

export default App;*/

import React, { useState } from "react";
import "./App.css";
import axios from "axios";
export default function App() {
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
    <div className="App">
      <h1>Time Stamp Generator</h1>
      <form onSubmit={handleSubmit}>
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
        </div>
      </form>
    </div>
  );
}
