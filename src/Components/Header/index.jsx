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
        <React.Fragment>
            <div className='header_fix'>
                <img src={logo} alt="logo" className='logo'/>
                <h4>Artavio</h4>
                <div className='toggle' onClick={handleClick}>
                    <div className='toggle_arm'></div>
                    <div className='toggle_arm'></div>
                </div>
            </div>
            <header>
                <nav>
                    <ul>
                        <li onClick={handleClick}><Link to='/'>Home</Link></li>
                        <li onClick={handleClick}><Link to='/3d_art'><b>Art</b>Gallery</Link></li>
                        <li onClick={handleClick}><Link to='/cultural_art'>Book<b>Mark</b></Link></li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header