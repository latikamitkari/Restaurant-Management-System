import React from "react";
import Carousel from 'react-bootstrap/Carousel';

import "./Carousel.css";


// const HomeScreen = () => {
//     return (
//       <div className="home">
//         <h1></h1>
//       </div>
//     )
//   }
function Carousel() {
  return (
    
    <Carousel>
    <Carousel.Item>
    <img style={{height:"600px"}}
          className="d-block w-100  "
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Third slide"
        />
      <Carousel.Caption>
        
       <h3 className="class1">"Food is the ingredient that binds us together." </h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:"600px"}}
          className="d-block w-100"
          src="https://plus.unsplash.com/premium_photo-1661777702966-aed29ab4106b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
       <img style={{height:"600px"}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Third slide"
        />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Carousel;
