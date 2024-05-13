import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import '../App.css';
import Marquee from './Marquee';


function Navbars() {
  return (
    <Router>
      <Navbar bg="primary" expand="lg" className="justify-content-center">
        <Container>
          <Navbar.Brand href="#">Demetrix Tourism</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="#Destinations">Destinations</Nav.Link>

              <Nav.Link href="#tourpkg">Tour Package</Nav.Link>
             
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Image style={{height : '50px',width : '50px'}} src="https://img.freepik.com/free-vector/flat-vintage-travel-background_23-2148189177.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1715558400&semt=ais_user" roundedCircle />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container id="Home" style={{ marginTop: '20px', textAlign: 'center',color : 'grey', }}>
        <Marquee/>
        <p className='text'>Explore our exciting destinations and book your next adventure with us!</p>
        <img style={{width: '100%'}} src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/tourandtravel1.jpg" alt="" />
      </Container>
     
    </Router>
  );
}

export default Navbars;
