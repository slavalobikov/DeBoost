import React from 'react';

import './SideDrawer.css';
import {NavLink} from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
         <NavLink to="/Main">Главная</NavLink>
        </li>
        <li>
            <NavLink to="/About">О нас</NavLink>
        </li>
          <li>
              <NavLink to="/Comments">Отзывы</NavLink>
          </li>

          <li>
              <NavLink to="/Boost">Заказать де-буст</NavLink>
          </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
