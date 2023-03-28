// import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import logo from '../../assets/Images/png/logo_v2.png'
import { toggleAnimation } from '../../assets/js/headerAnimation';
import { Link } from "react-router-dom";

  
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        if (isOpen) {
            // si isOpen est true, on déclenche l'animation pour fermer la navigation
            toggleAnimation(false);
            setIsOpen(false);
        } else {
            // si isOpen est false, on déclenche l'animation pour ouvrir la navigation
            toggleAnimation(true);
            setIsOpen(true);
        }
        };
    return (
        <header>
            <img src={logo} alt="logo" className='logo'/>
            <h4>Artavio</h4>
            <div className='toggle' onClick={handleClick}>
                <div className='toggle_arm'></div>
                <div className='toggle_arm'></div>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/3d_art'>3D <b>Art</b></Link></li>
                    <li><Link to='/experimental_art'>Experimental <b>Art</b></Link></li>
                    <li><Link to='/cultural_art'>Cultural <b>Art</b></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header