import React from "react";
import "./About.css";
import QuiltedImageList from "./a";



function About() {
  return (
    <div className="main">
      <section className="intro">
        
        <h1 className="title">WE ARE THE INDUSTRY LEADING NURSERY SINCE 2001</h1>
        <p className="para">
          We are a team of professionals who are dedicated to providing the best
          quality plants and services to our customers. We have been in the
          business for over 20 years and have built a reputation for quality and
          reliability. Our team of experts are always on hand to help you with any
          questions or concerns you may have. We are committed to providing the
          best customer service and the highest quality plants at the most
          competitive prices. We look forward to working with you and helping you
          create the garden of your dreams.
        </p>
      </section>
      <img src="public/a_1.png" alt="break" className="break-animation" />
      
      <section className="vision">
        <h1 className="title">OUR VISION</h1>
        <p className="para">
          Our vision is to be the leading provider of high-quality plants and gardening services, inspiring and enabling our customers to create beautiful and sustainable gardens. We aim to foster a love for nature and promote environmental stewardship through our products and services. By continuously innovating and improving, we strive to exceed our customers' expectations and contribute to a greener, healthier world.
        </p>
      </section>
      
      <section className="projects">
        <h1 className="title">OUR PROJECTS</h1>
        <ul className="list">
          <li>100000+ Plants per year</li>
          <li>10 new breeds</li>
          <li>22 years of experience</li>
          <li>Experiment: Optimal Growing Conditions for Tea Plants collaboration with TRI</li>
        </ul>
        
       
      </section>
      <QuiltedImageList />
    </div>
  );
}

export default About;