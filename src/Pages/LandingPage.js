import React from 'react'
import { Container, Table } from 'reactstrap'
import "../StyleSheets/LandingPage.css"

function LandingPage() {
  return (
    <Container style={{fontFamily:"sans-serif",marginTop:"20px"}}>
        <h3>Navigations</h3>
        <Table>
            <thead>
                <tr>
                    <td>Options / Links</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='optionsStyle'>Yet to Assign</td>
                    <td>Displays the student's name who are yet to be assigned with mentors</td>
                </tr>
                <tr>
                    <td className='optionsStyle'>Create Student</td>
                    <td>Create a new student by filling the student information</td>
                </tr>
                <tr>
                    <td className='optionsStyle'>Create Mentor</td>
                    <td>Create a new mentor by filling the mentor information</td>
                </tr>
                <tr>
                    <td className='optionsStyle'>Students</td>
                    <td>Display's only the student's name who are already assigned with a mentor</td>
                </tr>
                <tr>
                    <td className='optionsStyle'>Mentor</td>
                    <td>Display's all the mentors and their mentees information</td>
                </tr>
            </tbody>
        </Table>
    </Container>
  )
}

export default LandingPage