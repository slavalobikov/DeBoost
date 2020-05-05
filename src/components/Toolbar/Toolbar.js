import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import {NavLink, Route} from "react-router-dom";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">DE BOOST</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li> <NavLink to="/Main">Главная</NavLink> </li>
                <li> <NavLink to="/About">О нас</NavLink> </li>

                <li> <NavLink to="/Comments">Отзывы</NavLink> </li>
                <li>  <NavLink to="/Boost">Заказать де-буст</NavLink></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
