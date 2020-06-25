import React from "react";
import '../Styles/Preloader.scss'

export const Preloader = (props) => {
    return (
        <div className="text-container" onMouseDownCapture={props.set}>
            <h1>Private Gynecology Practice</h1>
        </div>

    )
}