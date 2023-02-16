import React, { useEffect, useState } from "react";
import { Alert, Container, Table } from "reactstrap";
import axios from "axios";

function DisplayMentor() {
  const [mentors, setMentors] = useState([]);

  const getDetails = async () => {
    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/mentors/getmentordetails`, {
        withCredentials: true,
      })
      .then((res) => {
       
        setMentors(res.data.info);
      });
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line
  }, []);
  return (
    <Container>
      {mentors.length > 0 ? (
        <Table
          dark
          hover
          responsive
          style={{ marginTop: "20px", textAlign: "center",alignItems:"center" }}
        >
          <thead>
            <tr>
              <th>Mentor Name</th>
              <th>Student Details</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((element) => (
              <tr>
                <td>{element.name}</td>
                <td style={{textAlign:"center"}}>
                    {
                        element.mentees.length>0 ?
                        element.mentees.map((name)=>(
                            
                                <ul>{name}</ul>
                            
                        ))
                        :
                        <ul style={{color:"red"}}>No students yet</ul>
                    }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert style={{marginTop:"20px",textAlign:"center",fontSize:"20px"}}>No data available</Alert>
      )}
    </Container>
  );
}

export default DisplayMentor;
