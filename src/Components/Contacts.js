import React from "react";
import '../Styles/Contacts.scss'

export const Contacts = (props) => {
    return (
        <section className="Contacts">
            <div className="Contacts__bg"></div>
            <ul>
                <li>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100007666564211">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        {props.lang === 'en-US' ? (
                            <span> - Facebook</span>
                        ) : (
                            <span> - Фейсбук</span>
                        )}
                    </a>
                </li>
                <li>
                    <a href="tel:+380932450303">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        {props.lang === 'en-US' ? (
                            <span> - Mobile</span>
                        ) : (
                            <span> - Мобiльний</span>
                        )}
                    </a>
                </li>
                <li>
                    <a href="viber://chat/?number=%2B380932216555">
                        <i className="fa fa-comments-o" aria-hidden="true"></i>
                        {props.lang === 'en-US' ? (
                            <span> - Viber</span>
                        ) : (
                            <span> - Вайбер</span>
                        )}
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                        {props.lang === 'en-US' ? (
                            <span> - Telegram</span>
                        ) : (
                            <span> - Телеграм</span>
                        )}
                    </a>
                </li>
                <li>
                    <a href="mailto: i.v.korol@ukr.net">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        {props.lang === 'en-US' ? (
                            <span> - Email</span>
                        ) : (
                            <span> - Пошта</span>
                        )}
                    </a>
                </li>
            </ul>
        </section>
    )
}
