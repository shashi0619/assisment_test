import React from "react";
import nature from "../assets/nature.jpeg";
import nature_2 from "../assets/nature_2.jpeg";
import nature_3 from "../assets/nature_3.jpeg";
import landing from "../assets/landing-extra.jpg";
import { Carousel } from 'antd';
import "./CarouselComponent.css"

export const CarouselComponent = () => {
  return (
    <>
    <h1>HEADING</h1>
    <Carousel autoplay style={{height: '500px'}}>
    <div>
      <img src={landing} alt="nature" className="imageStyle" />
    </div>
    <div>
      <img src={nature_2} alt="nature_2" className="imageStyle" />
    </div>
    <div>
      <img src={nature_3} alt="nature_3" className="imageStyle" />
    </div>
   
  </Carousel>
  </>
  );
};
