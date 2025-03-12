import React from 'react';
import ContactForm from './Contact';
import './Main.css'; 
import Bottom from "../Bottom";
import Navbar from "../Navbar";

function Contact() {
    return (
        <div>
            
            <div className="contact-container">
                <h1 className="contact-title animate-fade-in">Contact Us</h1>
                <p className="contact-description animate-slide-in">Feel free to reach out to us for any inquiries, feedback, or assistance—we’re here to help!</p>
                
                <div className="contact-details">
                    <h2 className="contact-subtitle animate-fade-in">Our HotLine</h2>
                    <ul className="contact-list animate-slide-in">
                        <li><a href="tel:+94715367306">+94 715367306</a></li>
                        <li><a href="tel:+94715367301">+94 701040942</a></li>
                        <li><a href="tel:+94715367303">+94 352289239</a></li>
                    </ul>
                    
                    <h2 className="contact-subtitle animate-fade-in">Our Email</h2>
                    <p className="animate-slide-in"><a href="mailto:ushanviduranga123@gmail.com">ushanviduranga123@gmail.com</a></p>
                    
                    <h2 className="contact-subtitle animate-fade-in">Our Address</h2>
                    <p className="animate-slide-in">Kirigalawaththa,<br />Maththamagoda,<br />Kotiyakumbura</p>
                </div>
                
                <h2 className="contact-subtitle animate-fade-in">Locate Us</h2>
                <div className="iframe-container animate-fade-in">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4221.904928090283!2d80.2832311!3d7.1047397000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30f006b209213%3A0x1bcb334b2ab8da75!2sDeeyagoda%20tea%20nursery!5e1!3m2!1sen!2slk!4v1736798048142!5m2!1sen!2slk" 
                        width="100%" 
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;