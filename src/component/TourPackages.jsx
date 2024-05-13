// TourPackages.jsx

import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

function TourPackages() {
  return (
    <Container id='tourpkg' style={{ marginTop: '20px', textAlign: 'center', color: 'grey' }}>
      <h2 style={{color: 'brown'}}>Our Tour Packages</h2>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZSnSjqF7ZdcPZJHRne3Mmtv4rowTXelLoq7XM6_BCg&s" />
            <Card.Body style={{backgroundColor: 'cyan'}}>
              <Card.Title>Premium Package</Card.Title>
              <Card.Text>
                <strong>Price:</strong> $1000 <br />
                <strong>Facilities:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="https://content3.jdmagicbox.com/comp/rajkot/dc/0281px281.x281.1227936794v5z2q6.dc/catalogue/skyline-tourism-150-feet-ring-road-rajkot-domestic-tour-operators-o29mivqtsj.jpg" />
            <Card.Body style={{backgroundColor: 'cyan'}}>
              <Card.Title>Ultra Premium Package</Card.Title>
              <Card.Text >
                <strong>Price:</strong> $1500 <br />
                <strong>Facilities:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card >
        </Col>
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGNfbRD_dU6VBcmLLPAZQD5A3T4UR1h3YCfynOVzlbw&s" />
            <Card.Body style={{backgroundColor: 'cyan'}}>
              <Card.Title>Normal Package</Card.Title>
              <Card.Text>
                <strong>Price:</strong> $800 <br />
                <strong>Facilities:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TourPackages;
