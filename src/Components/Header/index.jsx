// import { Link } from 'react-router-dom'
import logo from '../../assets/Images/png/logo_v2.png'

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" className='logo'/>
            <h4>Artavio</h4>
            <div className='toggle'>
                <div className='toggle_arm'></div>
                <div className='toggle_arm'></div>
            </div>
            {/* <nav>
                <ul>
                    <li><Link to="/lieux">Lieux culturels</Link></li>
                    <li><Link to="/restaurants">Les restaurants</Link></li>
                    <li><Link to="/magasins">Les magasins</Link></li>
                    <li><Link to="/sport">Le sport</Link></li>
                </ul>  
            </nav> */}
        </header>
    )
}

export default Header