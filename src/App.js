import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import {NavBar} from "./Components/NavBar";
import {MainPage} from "./Components/MainPage";
import {Contacts} from "./Components/Contacts";
import {FAQ} from "./Components/FAQ";
import {Find} from "./Components/Find";
import {Appointment} from "./Components/Appointment";
import {Preloader} from "./Components/Preloader";
import {AnimatedSwitch} from "react-router-transition";
import {Price} from "./Components/Price";

const App = () => {
    const [lang, setLang] = useState(navigator.language);
    const [preloader, setPreloader] = useState(true);

    useEffect(() => {
        if (sessionStorage.getItem('preloader') === null) {
            sessionStorage.setItem('preloader', true)
            setPreloader(true)
        } else {
            setPreloader(false)
        }
    }, [])
    const removePreloader = () => {
        setPreloader(false)
    }
    return (
        <>
            {preloader === true ? (
                <Preloader set={() => removePreloader()} />
            ) : (
                <div className="GeneralContent">
                    <NavBar lang={lang} setUkr={() => setLang('ua-UA')} setEng={() => setLang('en-US')}/>
                    <AnimatedSwitch
                        atEnter={{ opacity: 0 }}
                        atLeave={{ opacity: 0 }}
                        atActive={{ opacity: 1 }}
                        className="switch-wrapper"
                    >
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/contacts" exact component={() => <Contacts lang={lang} />}/>
                        <Route path="/faq" exact component={FAQ}/>
                        <Route path="/find-us" exact component={Find}/>
                        <Route path="/make-appointment" exact component={Appointment}/>
                        <Route path="/price" exact component={Price}/>
                    </AnimatedSwitch>
                </div>
            )}
            </>
    )
}

export default App;
