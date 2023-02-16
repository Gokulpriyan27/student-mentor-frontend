import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav,
  Navbar,
  NavbarBrand,
  NavItem,
 
} from 'reactstrap';

function Navigation(args) {
  
  return (
   
    <> 
    <Navbar
      color="dark"
      dark
    >
    <NavbarBrand style={{color:"white"}} href="/">StudentMentor Application</NavbarBrand>
    <Nav style={{width:"50%",display:"flex",justifyContent:"space-between",margin:"0 auto"}}>

      <NavItem style={{color:"white"}}>
        <Link style={{color:"white",textDecoration:"none"}} to="/listallstudents">Yet to Assign</Link>
      </NavItem>

      <NavItem href="/" style={{color:"white"}}>
        <Link style={{color:"white",textDecoration:"none"}} to="/createstudent">Create Student</Link>
      </NavItem>

      <NavItem href="/" style={{color:"white"}}>
      <Link style={{color:"white",textDecoration:"none"}} to="/creatementor">Create Mentor</Link>
      </NavItem>

      <NavItem href="/" style={{color:"white"}}>
      <Link style={{color:"white",textDecoration:"none"}} to="/displaystudents">Students</Link>
      </NavItem>

      <NavItem href="/" style={{color:"white"}}>
      <Link style={{color:"white",textDecoration:"none"}} to="/displaymentors">Mentors</Link>
      </NavItem>

      </Nav>
    </Navbar>
  </>
  );
}

export default Navigation;