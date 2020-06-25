import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import {NavBar} from "./Components/NavBar";
import {MainPage} from "./Components/MainPage";
import {About} from "./Components/About";
import {FAQ} from "./Components/FAQ";
import {Map} from "./Components/Map";
import {Appointment} from "./Components/Appointment";
import cn from 'classnames'

const App = () => {
    const [lang, setLang] = useState(navigator.language)
    return (
        <>
            <nav className="nav">
                <NavBar lang={lang}/>
                <div className="nav__btn_wrapper">
                    {/*<button*/}
                    {/*    className="nav__btn"*/}
                    {/*    onClick={() => setLang('ua-UA')}*/}
                    {/*>*/}
                    {/*    <img*/}
                    {/*        className={cn(lang !== 'en-US' ? "nav__btn_img nav__btn_img-active" : "nav__btn_img")}*/}
                    {/*        src="images/flag-ua.png" alt=""/>*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*    className="nav__btn"*/}
                    {/*    onClick={() => setLang('en-US')}*/}
                    {/*>*/}
                    {/*    <img*/}
                    {/*        className={cn(lang === 'en-US' ? "nav__btn_img nav__btn_img-active" : "nav__btn_img")}*/}
                    {/*        src="images/flag-en.png" alt=""/>*/}
                    {/*</button>*/}
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"/>
                    </label>
                </div>
            </nav>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/about" component={About}/>
                <Route path="/faq" component={FAQ}/>
                <Route path="/find-us" component={Map}/>
                <Route path="/make-appointment" component={Appointment}/>
            </Switch>
        </>
    )
}

export default App;
