import React from "react";
import '../Styles/Preloader.scss'

export const Preloader = (props) => {
    return (
        <div className="text-container">
            <h1>Private Gynecology Practice</h1>
            <button onClick={props.set}>start</button>
        </div>

    )
}