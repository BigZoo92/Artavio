// import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import logo from '../../assets/Images/svg/logo.svg'
import { toggleAnimation } from '../../assets/js/headerAnimation';
import { Link } from "react-router-dom";

  
function Header() {
    const location = useLocation();
    const [opacityNav, setopacityNav] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (location.pathname === "/") {
        setopacityNav(1);
        } else if (location.pathname === "/3d_art") {
        setopacityNav(2);
        } else if (location.pathname === "/bookmark") {
        setopacityNav(3);
        }
    }, [location.pathname]);
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
                        <li onClick={handleClick}><Link to='/' style={{opacity: opacityNav === 1 ? '1' : '.7'}}>Home</Link></li>
                        <li onClick={handleClick}><Link to='/3d_art' style={{opacity: opacityNav === 2 ? '1' : '.7'}}><b>Art</b>Gallery</Link></li>
                        <li onClick={handleClick}><Link to='/bookmark' style={{opacity: opacityNav === 3 ? '1' : '.7'}}>Book<b>Mark</b></Link></li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header