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

            <a href="mailto:jonathan.mc.96@hotmail.com" target="_blank" className="link">

                <div className="boton-contact"><FormattedMessage id="contact.button" defaultMessage="" /></div>
            </a>

            <div className="footer-contact">

                <div className="text-footer">
                    <div>
                        <a href="#/work" className="link-footer">
                            <FormattedMessage id="modal.proyects" defaultMessage="" />
                        </a>
                    </div>

                    <div>
                        <a href="#/certificates" className="link-footer">
                            <FormattedMessage id="modal.certificates" defaultMessage="" />
                        </a>
                    </div>

                </div>

                <div className="icons-contact">
                    <a href="mailto:jonathan.mc.96@hotmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
                    <a href="https://t.me/jonaxmc"target="_blank" className="link">
                        <i className="fab fa-telegram"></i>
                    </a>
               
                  <a href="https://www.linkedin.com/in/jonaxmc/" target="_blank"><i className="fab fa-linkedin"></i></a>
                 
                </div>


            </div>
        </div>
    )
}
