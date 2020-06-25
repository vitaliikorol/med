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
import {Preloader} from "./Components/Preloader";

const App = () => {
    const [lang, setLang] = useState(navigator.language);
    const [langVisibility, setLangVisibility] = useState('grayscale(80%)')
    const [preloader, setPreloader] = useState(true);

    const set = () => {
        setPreloader(prevState => !prevState)
    }
    const handleMouseEnter = () => {
        setLangVisibility('grayscale(0)')
    }

    const handleMouseLeave = () => {
        setLangVisibility('grayscale(80%)')
    }

    return (
        <>
            {preloader === true ? (
                <Preloader set={() => set()} />
            ) : (
                <>
                    <nav
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="nav">
                        <NavBar lang={lang}/>
                        <div className="nav__btn_wrapper" style={{filter: `${langVisibility}`}}>
                            <button
                                className="nav__btn"
                                onClick={() => setLang('ua-UA')}
                            >
                                <img
                                    className={cn(lang !== 'en-US' ? "nav__btn_img nav__btn_img-active" : "nav__btn_img")}
                                    src="images/flag-ua.png" alt=""/>
                            </button>
                            <button
                                className="nav__btn"
                                onClick={() => setLang('en-US')}
                            >
                                <img
                                    className={cn(lang === 'en-US' ? "nav__btn_img nav__btn_img-active" : "nav__btn_img")}
                                    src="images/flag-en.png" alt=""/>
                            </button>
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/faq" exact component={FAQ}/>
                        <Route path="/find-us" exact component={Map}/>
                        <Route path="/make-appointment" exact component={Appointment}/>
                    </Switch>
                </>
            )}
            </>
    )
}

export default App;
