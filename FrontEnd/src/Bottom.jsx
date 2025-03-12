import './Bottom.css';
import React from "react";
import { Link } from "react-router-dom";

function Bottom() {
    return (
        <div className='bottom'>
            <div className='bottom_Topic'>
                <h1>Bandara Tea Nursery</h1>
                <br />
                <h4>“Rooted in nature, blossoming with flavor—where every <br /> &ensp; plant begins the journey to your perfect brew.”</h4>
            </div>
            
            <div className='a'>
                <h2>Pages</h2>
                <h4><Link to="/" className="bottom-link">Home</Link></h4>
                <h4><Link to="/about" className="bottom-link">About</Link></h4>
                <h4><Link to="/contact" className="bottom-link">Contact</Link></h4>
                <h4><Link to="/products" className="bottom-link">Products</Link></h4>    
            </div>

            <div className='b'>
                <h2>Address</h2>
                <h4>Kirigalawaththa, Maththamagoda, <br />Kotiyakumbura.</h4>
            </div>

            <div className='c'>
                <h2>Follow Us</h2>
                <h4><a href='https://www.facebook.com' className='fa fa-facebook'> </a></h4>
                <h4><a href='https://www.instagram.com' className='fa fa-instagram'> </a></h4>
                <h4><a href='https://www.twitter.com' className='fa fa-twitter'> </a></h4>
            </div>
        </div>
    );
}

export default Bottom;