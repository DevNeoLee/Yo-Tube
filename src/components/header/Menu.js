import React from 'react';
import hamMenuIcon from './hamMenuIcon.png';
import logoIcon from './yoTubeLogo.png';
import { Link, NavLink } from 'react-router-dom';

function Menu() {

  
    return (
      <div className="menuContainer">
       
          <img src={hamMenuIcon} className="hamMenu" />
     
        <NavLink to={'/'}>
          <img src={logoIcon} className="logo" />
        </NavLink>
      </div>
    );
}

export default Menu;
