import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap"
import { useNavigate, useParams} from "react-router-dom"

function AssignMentor() {
    const {id}= useParams();
    const navigate = useNavigate();
    const [selectedMentor,setSelectedMentor]=useState("")
    const [student,setStudent]=useState("");
    const [mentors,setMentors]=useState([]);
    const getAllMentors = async()=>{
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/mentors/getallmentors`,
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
        ,{withCredentials:true})
        .then((res)=>{
            setMentors(res.data.info)
        })
    }

const getStudent = async()=>{
    await axios.get(`${process.env.REACT_APP_BASE_URL}/api/students/getastudent/${id}`,{headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }},{withCredentials:true})
    .then((res)=>{
        setStudent(res.data.info.name)
    })
}

const handleChange = (e)=>{
    setSelectedMentor({[e.target.name]:e.target.value})
}

const handleSubmit = ()=>{
    let payload = {
        studentId:id,
        mentor:selectedMentor.selectmentor
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/mentors/assignmentor`,payload,{withCredentials:true})
    .then((res)=>{
        navigate("/listallstudents")
        
    })
}
useEffect(()=>{
    getAllMentors();
    getStudent();
    // eslint-disable-next-line
},[])
  return (
    <Form style={{width:"50%",margin:"20px auto",display:"flex",flexDirection:"column",gap:"10px"}}>
        <FormGroup row>
    <Label
      for="studentname"
      sm={2}
    >
      Student Name
    </Label>
    <Col sm={10}>
      <Input
        id="studentname"
        name="studentname"
        type="text"
        defaultValue={student}
        readOnly

      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleSelect"
      sm={2}
    >
      Mentor
    </Label>
    <Col sm={10}>
      <Input style={{}}
        id="selectmentor"
        name="selectmentor"
        type="select"
        onChange={handleChange}
      >
        {mentors.length>0 ? mentors.map((element)=>(
            <option>
            {element}
          </option>
        )) : <option>No Mentors available</option>

        }
      </Input>
    </Col>
  </FormGroup>
  <Button style={{width:"160px",margin:"0 auto"}} outline color='success' onClick={handleSubmit}>submit</Button>
    </Form>
  )
}

export default AssignMentor