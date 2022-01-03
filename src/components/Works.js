import React from 'react'

import { FormattedMessage } from 'react-intl';

import recommender from '../assets/img/recommender.png'
import journal from '../assets/img/journal.png'
import calendar from '../assets/img/calendar.png'
import chat from '../assets/img/chat.png'
import { UiModal } from './ui/UiModal';

import '../styles/components/sections/_certificates.scss';
import { a } from 'react-router-dom';

export const Works = () => {




    return (
        <div>
            <UiModal />
            <div className="contenedor-work">
                <div className="contenedor-title">
                    <div className="title-works">
                        /work.
                    </div>
                </div>

                <div className="container work-tarjetas animate__animated animate__fadeIn">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <div className="card h-100 work-card">
                                <div className="img-works">
                                    <img src={recommender} alt="recommender" className="img-card-img" />
                                </div>

                                <div className="card-body">

                                    <h5 className="card-title">Title song recommender</h5>
                                    <p className="card-text">
                                        <FormattedMessage id="proyects.song-recommender" defaultMessage="" />

                                    </p>

                                </div>
                                <div className="rutas">
                                    <a className="card-link" href="https://github.com/jonaxmc/react-app-song" target="_blank" rel="noreferrer"><FormattedMessage id="proyects.code" defaultMessage="" /></a>
                                    <a className="card-link" href="https://jonaxmc.github.io/react-app-song/" target="_blank" rel="noreferrer"><FormattedMessage id="proyects.website" defaultMessage="" /></a>
                                </div>
                                <div className="card-footer bg-transparent ft-works">
                                    <small className="text-muted">React - Redux - Python </small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 work-card">
                                <div className="img-works">
                                    <img src={journal} alt="recommender" className="img-card-img2" />
                                </div>
                                <div className="card-body bd-works">

                                    <h5 className="card-title">Journal App</h5>
                                    <p className="card-text">
                                        <FormattedMessage
                                            id="proyects.journal-app"
                                            defaultMessage=""
                                        />
                                    </p>

                                </div>
                                <div className="rutas">
                                    <a className="card-link" href="https://github.com/jonaxmc/Journal-app" target="_blank" rel="noreferrer"><FormattedMessage id="proyects.code" defaultMessage="" /></a>
                                    <a className="card-link" href="https://jonaxmc.github.io/Journal-app/" target="_blank" rel="noreferrer"><FormattedMessage id="proyects.website" defaultMessage="" /></a>
                                </div>

                                <div className="card-footer bg-transparent ft-works">
                                    <small className="text-muted">React - Redux - Firebase </small>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 work-card">
                                <div className="img-works">
                                    <img src={calendar} alt="recommender" className="img-card-img3" />
                                </div>
                                <div className="card-body">
                                   
                                        <h5 className="card-title">Calendar App</h5>
                                        <p className="card-text">
                                            <FormattedMessage
                                                id="proyects.calendar-app"
                                                defaultMessage=""
                                            />
                                        </p>
                                </div>
                                <div className="rutas">
                                    <a className="card-link" href="https://github.com/jonaxmc/Calendar-app-frontend" target="_blank" rel="noreferrer"><FormattedMessage id="proyects.code" defaultMessage="" /></a>
                                    <a className="card-link" href="https://mern-calendar-jona.herokuapp.com/" target="_blank" rel="noreferrer"><FormattedMessage id="proyects.website" defaultMessage="" /></a>
                                </div>
                                <div className="card-footer bg-transparent ft-works">
                                    <small className="text-muted">React - Redux - Node JS - MongoDB </small>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 work-card">
                                <div className="img-works">
                                    <img src={chat} alt="recommender" className="img-card-img4" />
                                </div>
                                <div className="card-body">
                                        <h5 className="card-title">Chat App</h5>
                                        <p className="card-text">
                                            <FormattedMessage
                                                id="proyects.chat-app"
                                                defaultMessage=""
                                            />
                                        </p>
                                </div>
                                <div className="rutas">
                                    <a className="card-link" href="https://github.com/jonaxmc/flutter-mensajes" target="_blank" rel="noreferrer"><FormattedMessage id="proyects.code" defaultMessage="" /></a>
                                </div>
                                
                                <div className="card-footer bg-transparent ft-works">
                                    <small className="text-muted">Flutter - Socket.io - MongoDB - JWT</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}
