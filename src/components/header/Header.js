import React from 'react'
import { Menu, Icons } from '.';
import Search from './search/Search'
import './Header.css';
import yotube from '../../api/yotube';

function Header({onChildClick}) {

    return (
        <div className="headerContainer" >
            <Menu />
            <Search onChildClick={onChildClick}/>
            <Icons />
        </div>
    )
}

export default Header;
