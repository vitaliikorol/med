import React, {useEffect, useState} from "react";
import '../Styles/Find.scss'

export const Find = () => {
    const [opacity, setOpacity] = useState(0)
    useEffect(() => {
        setTimeout(() => setOpacity(1), 3000)
    })
    return (
        <section className="FindUs">
            <div className="FindUs__bg"/>
            <div className="mapouter" style={{opacity: `${opacity}`}}>
                <div className="gmap_canvas">
                    <iframe
                        style={{width: '90vmin', height: '50vmin'}}
                        title="find-us"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=%D0%B3.%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%2C%20%D1%83%D0%BB.%D0%A1%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F%2C%203-%D0%B2&t=&z=19&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                    />
                    <a href="https://www.embedgooglemap.net">embed google map</a></div>
            </div>
        </section>
    )
}
