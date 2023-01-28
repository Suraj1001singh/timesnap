import React from 'react';
import ReactPlayer from 'react-player/youtube'
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';
const VideoAnalysis = (props) => {

  const handleplay = (e)=>{
    let a = e.target.value;
    
    a /=1000;
    let mod_url = props.url+ '?t=' + a + 'ms';
    console.log(mod_url);
    props.setplay(mod_url)
  }
  return (
   <>
   { console.log(props.output[0].category)}
    <div className="row" style={{marginLeft:'2%'}}>
    <div className="col-5 Box result">
    {/* <Form.Group controlId="name">
    <Form.Label  style={{color:'#aa2727', fontSize:'30px',fontWeight:'bold',marginLeft:'30%'}} htmlFor="Category">Category</Form.Label>
    <Col sm={10}>
    <Form.Control
        type="text"
        style = {{marginLeft:'5%', textAlign:'center'}}
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        value = {props.output[0].category}
        disabled
      />
     </Col>
      </Form.Group> */}
      <Form.Group  controlId="name">
      <Form.Label  style={{color:'#aa2727', fontSize:'30px',fontWeight:'bold',marginLeft:'30%',marginTop:'2%'}} htmlFor="TimeStamp">TimeStamps</Form.Label>
        <Table striped bordered style={{backgroundColor:'white'}}>
        <tbody>
        {props.output[0].timestamps.map((val)=>{
           return  <>
        <tr>
       <td> <Button variant="success" onClick={handleplay} value={val.start}>{val.start/1000}</Button></td>
         
          <td>{val.gist}</td>
        </tr>
        </>
        })}
        </tbody>
        </Table>
        </Form.Group>
        <Form.Group  controlId="name">
        <Form.Label  style={{color:'#aa2727', fontSize:'30px',fontWeight:'bold', marginLeft:'30%',marginTop:'2%'}} htmlFor="Category">Summary</Form.Label>
        
        <Form.Control
        as="textarea"
        style = {{marginTop:'2%'}}
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        value = {props.output[0].summary}
        disabled
      />
      </Form.Group>
    </div>
    <div className = "col-1"></div>
    <div className="col-6 player"> <ReactPlayer url={props.play} controls={true} playing={true}/></div>
    </div>
   </>
  );
}

export default VideoAnalysis;
