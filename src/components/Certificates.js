import React from 'react'
import { UiModal } from './ui/UiModal'

import '../styles/components/sections/_certificates.scss';


export const Certificates = () => {
    return (

        <div>
            <UiModal />
            <div className="certificates">

                <div className="contenedor-title">
                    <div className="title-works">
                        /certificates.
                    </div>
                </div>

                <div className="container animate__animated animate__fadeIn">
                    <div className="row row-cols-1 row-cols-md-3 g-4">

                          {/* Angular */}
                          <div className="col">
                            <div className="card">
                                <div className="certificate-image">
                                    <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-0adb4616-3fbd-412a-acc2-c892cdfafd0d.jpg?v=1638981751000" className="card-img-top animate__animated animate__fadeIn" alt="..." />
                                    <a href="https://www.udemy.com/certificate/UC-0adb4616-3fbd-412a-acc2-c892cdfafd0d/" target="_blank" rel="noreferrer">
                                        <div className="middle">
                                            <div className="text">Ver</div>
                                        </div>
                                    </a>

                                </div>
                                <div className="card-body">
                                <a className="link" href="https://www.udemy.com/certificate/UC-0adb4616-3fbd-412a-acc2-c892cdfafd0d/" target="_blank" rel="noreferrer">
                                        <h5 className="card-title">Angular: De cero a experto</h5>
                                    </a>
                                    <small className="text-muted">08/12/2021</small>
                                </div>
                            </div>
                        </div>

                        {/* React */}
                        <div className="col">
                            <div className="card">
                                <div className="certificate-image">
                                    <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-88c03068-c890-485e-a819-8183a27ad567.jpg?v=1631832197000" className="card-img-top animate__animated animate__fadeIn" alt="..." />
                                    <a href="https://www.udemy.com/certificate/UC-88c03068-c890-485e-a819-8183a27ad567/" target="_blank" rel="noreferrer">
                                        <div className="middle">
                                            <div className="text">Ver</div>
                                        </div>
                                    </a>

                                </div>
                                <div className="card-body">
                                <a className="link" href="https://www.udemy.com/certificate/UC-88c03068-c890-485e-a819-8183a27ad567/" target="_blank" rel="noreferrer">
                                        <h5 className="card-title">React: De cero a experto ( Hooks y MERN )</h5>
                                    </a>
                                    <small className="text-muted">16/09/2021</small>
                                </div>
                            </div>
                        </div>

                      


                    </div>
                </div>

            </div>

        </div>

    )
}
