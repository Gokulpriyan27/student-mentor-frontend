import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Table } from "reactstrap";

function DisplayStudents() {
const [data,setData]=useState({
    name:"",
    mentorname:""
});
const getStudentinfo = async()=>{
    try {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/api/students/getstudentdetails`,{headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },},{withCredentials:true})
        .then((res)=>{
            setData(res.data.info)
        })
    } catch (error) {
        console.log(error)
    }
}

useEffect(()=>{
    getStudentinfo();
    // eslint-disable-next-line
},[])
  return (
    <Container>
        {
            data.length>0 ?
            <Table dark hover responsive style={{marginTop:"20px",textAlign:"center"}}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Assigned to Mentor</th>
            <th>Action ( no action )</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((element)=>(
                <tr>
                    <td>{element.name}</td>
                    <td>{element.mentorname}</td>
                    <td><Button>View Details</Button></td>
                </tr>
            ))
          }
        </tbody>
      </Table>
        :
        <Alert style={{marginTop:"20px",textAlign:"center",fontSize:"20px"}}>No data available</Alert>
        }
    </Container>
  );
}

export default DisplayStudents;
