import React, {useState} from "react";
import '../css/Navbar.css'
import logo from '../img/logo5.png'

function Navbar(){
  const [active, setActive] = useState('nav_menu');
  const [toggleIcon, setToggleIcon] = useState('nav_toggler');
  const navToggle = () => {
    active === 'nav_menu' ? setActive('nav_menu nav_active') : setActive('nav_menu');

    // TogglerIcon

    toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler')
  }
  return(
    <nav className="nav">
      <a href="#" className="nav_brand">
        <img src={logo} alt="logo" className="logo"></img>
      </a>
       <ul className={active}>
        <li className="nav_item"><a href="#" className="nav_link">Strona główna</a></li>
        <li className="nav_item"><a href="#about" className="nav_link">O Nas</a></li>
        <li className="nav_item"><a href="#" className="nav_link">Oferta</a></li>
        <li className="nav_item"><a href="#" className="nav_link">Realizacje</a></li>
        <li className="nav_item"><a href="#" className="nav_link">Kontakt</a></li>
       </ul>
       <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
       </div>
    </nav>
  );
}

export default Navbar;