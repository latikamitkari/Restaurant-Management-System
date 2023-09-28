import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';

import "./Home.css";


// const HomeScreen = () => {
//     return (
//       <div className="home">
//         <h1></h1>
//       </div>
//     )
//   }
function Home() {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
    <img style={{height:"700px"}}
          className="d-block w-100  "
          src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Third slide"
        />
      <Carousel.Caption>
        
       <h3 className="class1">"Food is the ingredient that binds us together." </h3>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
      <img style={{height:"700px"}}
          className="d-block w-100"
         
          src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Third slide"
        />
      <Carousel.Caption>
        <h3 className="class1" >"Happiness is a warm cookie." </h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
       <img style={{height:"700px"}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          alt="Third slide"
        />
      <Carousel.Caption>
        <h3 className="class1" >"Food tastes better when you eat it with your family."</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>




  </div>
  );
}

export default Home;
