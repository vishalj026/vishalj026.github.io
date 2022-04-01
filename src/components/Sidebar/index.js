import { faUser, faHome,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

import headerIcon from '../../assets/images/header_icon.svg';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import './index.scss';

const Sidebar = () => {
    return (
        <>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
        <div className="nav-bar">
        <Link className='logo' to='/'>
        {/* <span className="material-icons-outlined">
        &#xe4f3;
</span>
<br />
            {/* <img src={headerIcon} alt="logo" /> 
            <img className='sub-logo' src={LogoSubtitle} alt="slobodan" /> */}
            <span className='header'>
                VJ
            </span>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noopener noreferer" href="https://www.linkedin.com/in/vishal-joshi-207716106">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noopener noreferer" href="https://github.com/vishalj026">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
        </div>
        </>
    );
}

export default Sidebar;