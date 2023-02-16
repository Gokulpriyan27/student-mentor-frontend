import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Alert, Button, Col, Container, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

function ListAllStudents() {

const navigate = useNavigate();
    
const [students,setStudents]=useState([]);
const getAllStudents = async()=>{
    await axios.get(`${process.env.REACT_APP_BASE_URL}/api/students/getallstudents`,{headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },},{withCredentials:true})
    .then((res)=>{
        setStudents(res.data)
    })
}

useEffect(()=>{
    getAllStudents();
    // eslint-disable-next-line
},[]);


  return (
    <Container>
    { students.length>0 ?
    <Table style={{marginTop:"20px",width:"80%",margin:"20px auto",textAlign:"center"}}
    dark
    hover
    responsive
    size='auto'
  >
    <thead>
     <tr>
        <th>Name</th>
        <th>Mentor</th>
        <th>Action</th>
     </tr>
    </thead>
    <tbody>
      {
        students.map((element)=>(
            <tr>
                <td>{element.name}</td>
                {
                    element.mentorname.length>0 ? <td>{element.mentorname}</td> : <td>No Mentor assigned</td>
                }
                
                {
                    element.mentorname.length===0 ? <td><Button outline onClick={()=>navigate(`/assignmentor/${element._id}`)}>
                            Assign</Button></td> : <td><Button>View Details</Button></td>
                }
            </tr>
        ))
      }
    </tbody> 
  </Table> :
  <Col>
    <Alert style={{textAlign:"center",marginTop:"20px",fontSize:"20px"}}>No data available</Alert>
  </Col>
  
}

  </Container>


  )




}

export default ListAllStudents