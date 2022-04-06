import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    const aboutArr = 'About me'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    }, []); 

    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                            strArray={aboutArr}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p>Hi, my name is Vishal and I'm a web developer who's passionate about all things JavaScript.
                        I live in Bangalore, and am currently working for Deloitte as a frontend developer.
                        Some of the technologies I've used to build web apps are React, Angular, Redux, and Node.js.
                    </p>
                    <p>When I'm not busy working, you can find me watching football, F1, tennis and badminton.</p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031"></FontAwesomeIcon>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"></FontAwesomeIcon>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    );
}

export default About;