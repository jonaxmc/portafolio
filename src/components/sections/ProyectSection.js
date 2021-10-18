import React from 'react'
import recommender from '../../assets/img/recommender.png'
import journal from '../../assets/img/journal.png'
import calendar from '../../assets/img/calendar.png'
import chat from '../../assets/img/chat.png'

import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

export const ProyectSection = () => {


    return (
        <div className="contenedor-proyectos">
            <div className="cuerpo">
                <div className="container">
                    <div className="title">
                        <h1 className="uppercase"><FormattedMessage id="proyects.title" defaultMessage="" /></h1>
                    </div>
                </div>


                <div className="container">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <div className="img-works">
                                    <img src={recommender} alt="recommender" className="img-card-img" />
                                </div>

                                <div className="card-body">
                                    <div className="descripcion">
                                        <h5 className="card-title text-color1">Title song recommender</h5>
                                        <p className="card-text">
                                            <FormattedMessage id="proyects.song-recommender" defaultMessage="" />
                                        </p>
                                    </div>

                                </div>
                                <div className="rutas">
                                    <small className="text-muted">React - Redux - Python </small>
                                </div>
                                <div className="card-footer footer1 ft-proyects">
                                    <small className="text-muted">
                                        <Link className="link" to={{ pathname: "https://github.com/jonaxmc/react-app-song" }} target="_blank">
                                            <div className="proyects-icons-footer proyects-footer-color-1">
                                                <h2 className="text-code1"><FormattedMessage id="proyects.code" defaultMessage="" /></h2>
                                                <i className="fas fa-link"></i>
                                            </div>
                                        </Link>
                                    </small>
                                    <small className="text-muted">
                                        <Link className="link" to={{ pathname: "https://jonaxmc.github.io/react-app-song/" }} target="_blank">
                                            <div className="proyects-icons-footer proyects-footer-color-1">
                                                <h2 className="text-code1"><FormattedMessage id="proyects.website" defaultMessage="" /></h2>
                                                <i className="fas fa-external-link-alt"></i>
                                            </div>
                                        </Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="img-works">
                                    <img src={journal} alt="recommender" className="img-card-img2" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-color2">Journal App</h5>
                                    <p className="card-text">
                                        <FormattedMessage
                                            id="proyects.journal-app"
                                            defaultMessage=""
                                        />
                                    </p>
                                </div>
                                <div className="rutas">
                                    <small className="text-muted">React - Redux - Firebase </small>
                                </div>
                                <div className="card-footer footer2 ft-proyects">
                                    <small className="text-muted">
                                        <Link className="link" to={{pathname:"https://github.com/jonaxmc/Journal-app"}} target="_blank">
                                        <div className="proyects-icons-footer proyects-footer-color-2">
                                            <h2><FormattedMessage id="proyects.code" defaultMessage="" /></h2>
                                            <i className="fas fa-link"></i>
                                        </div>
                                        </Link>
                                        
                                    </small>
                                    <small className="text-muted">
                                        <Link className="link" to={{pathname:"https://jonaxmc.github.io/Journal-app/"}} target="_blank">
                                        <div className="proyects-icons-footer proyects-footer-color-2">
                                            <h2><FormattedMessage id="proyects.website" defaultMessage="" /></h2>
                                            <i className="fas fa-external-link-alt"></i>
                                        </div>
                                        
                                        </Link>
                                    </small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="img-works">
                                    <img src={calendar} alt="recommender" className="img-card-img3" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-color3">Calendar App</h5>
                                    <p className="card-text">
                                        <FormattedMessage
                                            id="proyects.calendar-app"
                                            defaultMessage=""
                                        />
                                    </p>
                                </div>
                                <div className="rutas">
                                    <small className="text-muted">React - Redux - Node JS - MongoDB </small>
                                </div>
                                <div className="card-footer footer3 ft-proyects">
                                    <Link className="link" to={{ pathname: "https://github.com/jonaxmc/Calendar-app-frontend" }} target="_blank">
                                        <small className="text-muted">
                                            <div className="proyects-icons-footer proyects-footer-color-3">
                                                <h2><FormattedMessage id="proyects.code" defaultMessage="" /></h2>
                                                <i className="fas fa-link"></i>
                                            </div>
                                        </small>
                                    </Link>
                                    <Link className="link" to={{ pathname: "https://mern-calendar-jona.herokuapp.com/" }} target="_blank">
                                        <small className="text-muted">
                                            <div className="proyects-icons-footer proyects-footer-color-3">
                                                <h2><FormattedMessage id="proyects.website" defaultMessage="" /></h2>
                                                <i className="fas fa-external-link-alt"></i>
                                            </div>
                                        </small>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100">
                                <div className="img-works">
                                    <img src={chat} alt="recommender" className="img-card-img4" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-color4">Chat App</h5>
                                    <p className="card-text">
                                        <FormattedMessage
                                            id="proyects.chat-app"
                                            defaultMessage=""
                                        />
                                    </p>
                                </div>
                                <div className="rutas">
                                    <small className="text-muted">Flutter - Socket.io - MongoDB - JWT </small>
                                </div>
                                <div className="card-footer footer4 ft-proyects">
                                    <Link className="link" to={{pathname:"https://github.com/jonaxmc/flutter-mensajes"}} target="_blank">
                                    <small className="text-muted">
                                        <div className="proyects-icons-footer proyects-footer-color-4">
                                            <h2><FormattedMessage id="proyects.code" defaultMessage="" /></h2>
                                            <i className="fas fa-link"></i>
                                        </div>
                                    </small>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            {/* <div className="container ver-mas">
                <Link to="/work" target="_blank">
                    <button type="button" className="btn btn-outline-success" >
                        <FormattedMessage id="proyects.show-more" defaultMessage="" />
                    </button>

                </Link>
            </div> */}
        </div>
    )
}
