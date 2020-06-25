import React from "react";
import {NavLink} from 'react-router-dom'
import '../Styles/NavBar.scss'

export const NavBar = (props) => {
  const lang = props.lang;
  return (
    <div className="NavBar">
      <NavLink
          exact
          className="NavBar__link"
          activeClassName="NavBar__link_active"
          to="/">
        {lang === 'en-US' ? `Home` : `Головна`}
      </NavLink>
      <NavLink
          className="NavBar__link"
          activeClassName="NavBar__link_active"
          to="/about">
        {lang === 'en-US' ? `About us` : `Про нас`}
      </NavLink>
      <NavLink
          className="NavBar__link"
          activeClassName="NavBar__link_active"
          to="/make-appointment">
        {lang === 'en-US' ? `Make an appointment` : `Зробити замовлення`}
      </NavLink>
      <NavLink
          className="NavBar__link"
          activeClassName="NavBar__link_active"
          to="/find-us">
        {lang === 'en-US' ? `Find us` : `Знайти нас`}
      </NavLink>
      <NavLink
          className="NavBar__link"
          activeClassName="NavBar__link_active"
          to="/faq">
        {lang === 'en-US' ? `F.A.Q` : `Питання i вiдповiдi`}
      </NavLink>
    </div>
  )
}
