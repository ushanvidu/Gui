import React from 'react';
import styles from './Card.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Card({ title, description, image, learn }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    loading="lazy"
                    src={image}
                    className={styles.foodImage}
                    alt="Tea Plant"
                />
            </div>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>
                    {description}
                </p>
                <div className={styles.button}>
                    <Popup trigger={
                    <button className={styles.button1}>Learn More</button>}
                    position="right center">
                        <div>{learn}</div>
                    </Popup>
                   
                    <button className={styles.button1}>Buy</button>
                  
                </div>
            </div>
        </div>
    );
}

export default Card;