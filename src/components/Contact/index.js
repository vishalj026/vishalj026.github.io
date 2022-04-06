import {useState, useEffect, useRef} from 'react';
import Loader from 'react-loaders';
import emailJs from '@emailjs/browser';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const formRef = useRef();

    const contactArr = 'Contact me'.split('');

    const sendEmail = (e) => {
        e.preventDefault();
        emailJs.sendForm(
            'service_o33a512',
            'template_t4gqmmr',
            formRef.current,
            'pQdV1mj6Ept9h_T1q' 
            )
            .then(
                () => {
                    alert('Message sent!');
                },
                (error) => {
                    console.log(error);
                    alert('Failed to send message. Please try again.');
                }
            );
    }

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []); 

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        strArray={contactArr}
                        idx={15}
                        letterClass={letterClass}
                        ></AnimatedLetters>
                    </h1>
                    <p>
                        I'm interested in all things JavaScript. 
                        If you have an idea for a project, or just want to chat, feel free to reach out to me using the form below.
                    </p>
                    <div className="contact-form">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input type="text" name='subject' placeholder='Subject' required/>
                                </li>
                                <li>
                                    <textarea name="message" id="message" placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='Send'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                {/* 
                //Map part - errors with react 18

                <div className="info-map">
                    Vishal Joshi
                    <br />
                    Bangalore,
                    <br />
                    India
                    <br />
                    <span>vj.allthingsjs@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[13.055928, 77.611413]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
                        <Marker position={[13.055928, 77.611413]}>
                            <Popup>
                                I live here, come over for a cup of coffee! :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div> */}
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Contact;