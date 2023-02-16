import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, Input, Label} from "reactstrap"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

let mentorinitialformValues = {
    name:"",
    email:""
}

function CreateMentor() {
const navigate = useNavigate();
const[mentorFormValues,setMentorFormValues]=useState(mentorinitialformValues);

const mentorHandleChange=(e)=>{
    setMentorFormValues({...mentorFormValues,[e.target.name]:e.target.value})
}

const mentorhandlesubmit = ()=>{
    const payload = mentorFormValues;
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/mentors/create`,payload,
    
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    }
    ,{withCredentials:true})
    .then((res)=>{
        setMentorFormValues(mentorinitialformValues);
        navigate("/displaymentors")
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
          value = {mentorFormValues.name}
          onChange={mentorHandleChange}
    
        />
        <Label for="name">Mentor Name</Label>
      </FormGroup>{" "}


      <FormGroup floating>
        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          style={{height:"50px"}}
          value = {mentorFormValues.email}
          onChange={mentorHandleChange}
        
        />
        <Label for="email">Email</Label>
      </FormGroup>{" "}
     
      <Button color="danger" outline onClick={mentorhandlesubmit}>Submit</Button>
    </Form>
  </Container>
  )
}

export default CreateMentor