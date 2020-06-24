import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { NavBar } from "./Components/NavBar";
import { MainPage } from "./Components/MainPage";
import { About } from "./Components/About";
import { FAQ } from "./Components/FAQ";
import { Map } from "./Components/Map";
import { Appointment } from "./Components/Appointment";

const App = () => {
  const [lang, setLang] = useState(navigator.language)
  return (
    <>
      <nav className="nav">
        <NavBar lang={ lang }/>
        <button className="nav__btn nav__btn_ua" onClick={() => setLang('ua-UA')}>UA</button>
        <button className="nav__btn nav__btn_en" onClick={() => setLang('en-US')}>EN</button>
      </nav>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/find-us" component={Map} />
        <Route path="/make-appointment" component={Appointment} />
      </Switch>
    </>
  )
}

export default App;
