import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

import './index.scss';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = 'Vishal Joshi,'.split('');
    const jobArray = 'a web developer.'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 5000);
    }, []);        //empty array in 2nd argument means that useEffect runs only once, the first time the component is created

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m &nbsp;</span>

                        <AnimatedLetters letterClass={letterClass}
                            idx={15}
                            strArray={nameArray} />

                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            idx={27}
                            strArray={jobArray} />
                    </h1>
                    <h2>Frontend Developer / JavaScript Expert</h2>
                    <Link to="contact" className='flat-button'>CONTACT ME</Link>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Home;