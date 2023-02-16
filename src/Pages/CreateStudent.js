import React, { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";
let initialformValues = {
    name:"",
    email:""
}

function CreateStudent() {
const navigate = useNavigate();
const [formValues,setformValues] = useState(initialformValues);

const handleFormChange = (e)=>{
    setformValues({...formValues,[e.target.name]:e.target.value})
}

const handleFormSubmit=async()=>{
  const payload = formValues
  
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/students/create`,payload,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    },{withCredentials:true})
    .then((res)=>{
     
      navigate("/listallstudents")
    })
}
  return (
    <Container>
      <Form style={{width:"60%",margin:"20px auto"}}>

      <FormGroup floating>
          <Input
            id="name"
            name="name"
            placeholder="name"
            type="text"
            style={{height:"50px"}}
            value={formValues.name}
            onChange={handleFormChange}
          />
          <Label for="name">Student Name</Label>
        </FormGroup>{" "}


        <FormGroup floating>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            style={{height:"50px"}}
            value={formValues.email}
            onChange={handleFormChange}
          />
          <Label for="email">Email</Label>
        </FormGroup>{" "}
       
        <Button color="success" outline onClick={handleFormSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

export default CreateStudent;
