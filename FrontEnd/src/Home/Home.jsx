import React from 'react';
import styles from './Home.module.css';
import DarkVariantExample from './sample';
import About from "../About/About";
import Intro from '../Intro/Intro';
import Frame from '../Frame/Frame';

const Home = () => {
    return (
        <div className={styles.home}>
           
            <div>
                <h1 className={styles.title}>BANDARA TEA NURSERY</h1>
                <h1 className={styles.intro}>THE LEADING INNOVATORS IN THE PLANTATION INDUSTRY</h1>
                <p className={styles.subintro}>We are the leading innovators in the plantation industry, providing the best quality tea plants to our customers. We have been in the industry for over 25 years and have a proven track record of providing the best quality plants to our customers and also we are goverment registerd factory. Our tea plants are grown in the best conditions and are of the highest quality. We have a team of experts who are dedicated to providing the best quality plants to our customers. We are committed to providing the best quality plants to our customers and are always looking for ways to improve our products and services.</p>
                    
                
            </div>
            <Intro />
            <DarkVariantExample />
            <Frame />
            
            <About />   
        </div>
        
    );
};

export default Home;