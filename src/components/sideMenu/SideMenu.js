import React from 'react';
import './sideMenu.css';
import homeIcon from './homeIcon.png';
import trendingIcon from './trendingIcon.png';
import subscriptionIcon from './subscriptionIcon.png';
import originalIcon from './originalIcon.png';
import { Link, NavLink } from 'react-router-dom';

function SideMenu() {
    return (
      <ul className="sideList">
        <NavLink to="/" style={{ textDecoration: "none" }}
          >
          <li className="sideItem">
            <img src={homeIcon} /> <p>Home</p>
          </li>
        </NavLink>

        <NavLink to="" style={{ textDecoration: "none" }} >
          <li className="sideItem">
            <img src={trendingIcon} /> <p>Trending</p>
          </li>
        </NavLink>

        <NavLink to="" style={{ textDecoration: "none" }}>
          <li className="sideItem">
            <img src={subscriptionIcon} /> <p>Subscriptions</p>
          </li>
        </NavLink>
        <NavLink to="" style={{ textDecoration: "none" }}>
          <li className="sideItem">
            <img src={originalIcon} /> <p>Originals</p>
          </li>
        </NavLink>
        <hr />
      </ul>
    );
}

export default SideMenu;
