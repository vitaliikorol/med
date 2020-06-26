import React from "react";
import {NavLink} from 'react-router-dom'
import '../Styles/NavBar.scss'
import {Nav, Navbar, NavDropdown, Button, DropdownButton} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = (props) => {
    const lang = props.lang;
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="NavBar">
            <Navbar.Brand href="/"><img className="nav__logo" src="images/logo.png" alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
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
                        to="/contacts">
                        {lang === 'en-US' ? `Contacts` : `Контакти`}
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

                    <NavDropdown title={lang === 'en-US' ? `Additional info` : `Допомiжна iнформацiя`} id="collasible-nav-dropdown">
                        {/*<NavDropdown.Divider/>*/}
                        <NavDropdown.Item>
                            <NavLink
                                className="NavBar__link"
                                activeClassName="NavBar__link_active"
                                to="/faq">
                                {lang === 'en-US' ? `F.A.Q` : `Питання i вiдповiдi`}
                            </NavLink>
                        </NavDropdown.Item>

                    </NavDropdown>
                </Nav>
                <DropdownButton
                    variant="dark"
                    alignRight
                    title={lang === 'en-US' ? `Language` : `Мова`}
                    id="dropdown-basic"
                >
                    <NavDropdown.Item
                        bsPrefix="dropdown-item dd-item"
                    >
                        <Button
                            bsPrefix="btn btn-secondary"
                            variant="dark"
                            onClick={props.setUkr}
                        >Украïнська</Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        bsPrefix="dropdown-item dd-item"
                    >
                        <Button
                            bsPrefix="btn btn-secondary"
                            variant="dark"
                            onClick={props.setEng}
                        >English</Button>
                    </NavDropdown.Item>
                </DropdownButton>
            </Navbar.Collapse>
        </Navbar>

    )
}


