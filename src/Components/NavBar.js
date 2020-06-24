import React from "react";
import {NavLink} from 'react-router-dom'

export const NavBar = (props) => {
  const lang = props.lang;
  return (
    <>
      <NavLink to="/">
        {lang === 'en-US' ? `Home` : `Головна`}
      </NavLink>
      <NavLink to="/about">
        {lang === 'en-US' ? `About us` : `Про нас`}
      </NavLink>
      <NavLink to="/make-appointment">
        {lang === 'en-US' ? `Make an appointment` : `Зробити замовлення`}
      </NavLink>
      <NavLink to="/find-us">
        {lang === 'en-US' ? `Find us` : `Знайти нас`}
      </NavLink>
      <NavLink to="/faq">
        {lang === 'en-US' ? `F.A.Q` : `Питання i вiдповiдi`}
      </NavLink>
    </>
  )
}
