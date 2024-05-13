// Contact.jsx

import React from 'react';
import '../App.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <Container id='contact' style={{ marginTop: '20px', textAlign: 'center', color: 'grey' }}>
      <h2 style={{color: 'brown'}}>Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <p>If you have any questions or inquiries, feel free to contact us using the form below:</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h3 style={{color: 'chocolate'}}>Connect with us:</h3>
          <p>Follow us on social media for updates and more:</p>
{/*           <ul className="list-inline social">
            <li className="list-inline-item"><a href="www.facebook.com"><FaFacebook /></a></li>
            <li className="list-inline-item"><a href="www.twitter.com"><FaTwitter /></a></li>
            <li className="list-inline-item"><a href="www.instagram.com"><FaInstagram /></a></li>
          </ul> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
