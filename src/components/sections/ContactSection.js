import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'


export const ContactSection = () => {
    return (
        <div className="contact-page">

            <div className="title-contact title">
                <h1 className="uppercase"><FormattedMessage id="contact.send-message" defaultMessage="" /></h1>
            </div>

            <div className="contact-description">
                <FormattedMessage id="contact.description" defaultMessage="" />
            </div>

            <Link to={{ pathname: "mailto:jonathan.mc.96@hotmail.com" }} target="_blank" className="link">

                <div className="boton-contact"><FormattedMessage id="contact.button" defaultMessage="" /></div>
            </Link>

            <div className="footer-contact">

                <div className="text-footer">
                    <div>
                        <Link to="/work" className="link-footer">
                            <FormattedMessage id="modal.proyects" defaultMessage="" />
                        </Link>
                    </div>

                    <div>
                        <Link to="/certificates" className="link-footer">
                            <FormattedMessage id="modal.certificates" defaultMessage="" />
                        </Link>
                    </div>

                </div>

                <div className="icons-contact">
                    <Link to={{ pathname: "mailto:jonathan.mc.96@hotmail.com" }} target="_blank"><i className="fas fa-envelope"></i></Link>
                    <Link to={{ pathname: "https://t.me/jonaxmc" }} target="_blank" className="link">
                        <i className="fab fa-telegram"></i>
                    </Link>
                    <Link to={{ pathname: "https://www.linkedin.com/in/jonaxmc/" }} target="_blank" className="link">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>


            </div>
        </div>
    )
}
