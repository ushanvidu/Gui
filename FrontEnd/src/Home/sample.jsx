import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { alignProperty } from '@mui/material/styles/cssUtils';
// import './sample.css';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="light" interval={3000} fade className="slide">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="x.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={{ backgroundColor: 'rgba(250, 246, 246, 0.7)', color: 'black', padding: '10px', textAlign: 'top' }}>
          <h5>Tea is one of the most famous Drink</h5>
          <p>“Growing tea is more than cultivating a plant—it’s nurturing a tradition, connecting with nature, and harvesting a cup of tranquility. Every leaf you grow holds the promise of flavor, health, and a deeper bond with the earth. Start your tea-growing journey today and watch your passion for tea flourish!”.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="y.jpg"
          alt="Get the best quality plants"
        />
         <Carousel.Caption style={{ 
    
    color: 'black', 
    padding: '10px', 
    textAlign: 'center', 
    position: 'absolute',
    top: '200px', 
    left: '50%', 
    transform: 'translateX(-50%)', 
    width: '70%' 
}}>
          <h5>Get the best quality plants</h5>
          <p>“Starting with the best quality plants is the foundation of a thriving tea garden. Healthy, high-quality plants ensure robust growth, better resistance to pests and diseases, and superior flavor in every leaf. Investing in premium plants not only guarantees a rewarding harvest but also saves time and effort in the long run. Remember, the journey to exceptional tea begins with exceptional plants!”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="z.jpg"
          alt="Third slide"
        />
        <Carousel.Caption style={{ 
    
    color: 'black', 
    padding: '10px', 
    textAlign: 'center', 
    position: 'absolute',
    top: '200px', 
    left: '50%', 
    transform: 'translateX(-50%)', 
    width: '70%' 
}}>
   

          <h5>What can you get from us !</h5>
          <p>“We offer premium quality tea plants to ensure your cultivation journey starts with the best. Along with expert advice and growing tips, we provide resources to help you care for your plants effectively. Enjoy convenient online ordering, dedicated customer support, and the assurance of eco-friendly practices, all designed to help you succeed in growing your tea garden.”</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;