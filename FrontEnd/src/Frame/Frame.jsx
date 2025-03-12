import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import styles from './Frame.module.css';

function Frame() {
    return (
        <div className={styles.frame}>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={0} style={{ background: 'linear-gradient(#116F53, #116F53)' }}>
                    <div className={styles.bigframe}>
                        <h1 className={styles.header}>Welcome to Our Sites</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={1} style={{ background: 'linear-gradient(#116F53, #116F53)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className={styles.subframe}>
        <img src='./card_1.png' alt='cover' className={`${styles.imageourstory} ${styles.fantastic}`} />
    </div>
</ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.5}>
                    <div className={styles.para}>
                        <p>
                            At Bandara Tea Nursery, our journey began with a deep passion for cultivating the finest tea plants. Nestled in the heart of nature, our nursery is dedicated to growing high-quality tea varieties while preserving traditional and sustainable farming practices. From hand-picked seedlings to carefully nurtured plants, we ensure every leaf embodies freshness and purity. Whether you’re a tea enthusiast, a home gardener, or a commercial grower, we provide the best selection to meet your needs. Join us in our mission to bring the rich aroma and health benefits of tea straight from our nursery to your cup!
                        </p>
                    </div>   
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={1}>
                    <div className={styles.image2}>
                        <img src='./frame1/2211.w058.n003.29b.p1.29-removebg-preview.png' alt='cover' className={styles.imagelast} />
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}

export default Frame;