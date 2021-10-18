import React from 'react'
import { UiModal } from './ui/UiModal'

import '../styles/components/sections/_certificates.scss';
import { Link } from 'react-router-dom';


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
                        <div className="col">
                            <div className="card">
                                <div className="certificate-image">
                                    <img src="https://udemy-certificate.s3.amazonaws.com/image/UC-88c03068-c890-485e-a819-8183a27ad567.jpg?v=1631832197000" className="card-img-top" alt="..." />
                                    <Link to={{pathname:"https://www.udemy.com/certificate/UC-88c03068-c890-485e-a819-8183a27ad567/"}} target="_blank">
                                        <div className="middle">
                                            <div className="text">Ver</div>
                                        </div>
                                    </Link>

                                </div>
                                <div className="card-body">
                                <Link className="link" to={{pathname:"https://www.udemy.com/certificate/UC-88c03068-c890-485e-a819-8183a27ad567/"}} target="_blank">
                                        <h5 className="card-title">React: De cero a experto ( Hooks y MERN )</h5>
                                    </Link>
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
