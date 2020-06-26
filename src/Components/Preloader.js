import React from "react";
import '../Styles/Preloader.scss'

export const Preloader = (props) => {

    return (
        <div className="Preloader"
             onMouseDownCapture={props.set}>
            {navigator.language === 'en-US' ? (
                <h1 className="Preloader__header">Private Gynecology Practice</h1>
            ) : (
                <h1 className="Preloader__header">Приватна Гiнекологiчна Практика</h1>
            )}
            <p className="Preloader__description">click anywhere to start</p>
        </div>

    )
}