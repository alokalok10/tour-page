// Testimonials.jsx

import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

function Testimonials() {
  return (
    <Container id='testimonials' style={{ marginTop: '20px', textAlign: 'center', color: 'grey' }}>
      <h2 style={{color: 'red'}}>Our Client Says</h2>
      <Carousel>
        <Carousel.Item>
          <img  style={{height : '300px'}}
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{color : 'black'}}>
            <h3>John Doe</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img  style={{height : '300px'}}
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg"
            alt="Second slide"
          />
          <Carousel.Caption style={{color : 'red'}}>
            <h3>Jane Smith</h3>
            <p>"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height : '300px'}}
            className="d-block w-100"
            src="https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg"
            alt="Third slide"
          />
          <Carousel.Caption style={{color : 'blue'}}>
            <h3>Michael Johnson</h3>
            <p>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Testimonials;
