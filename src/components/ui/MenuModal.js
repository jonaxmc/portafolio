import React from 'react'
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiCloseModal, uiLanguageES, uiuiLanguageEN } from '../../actions/ui';




Modal.setAppElement('#root');

export const MenuModal = () => {

    const { modalOpen, language } = useSelector(state => state.ui)


    const dispatch = useDispatch();



    const closeModal = () => {
        dispatch(uiCloseModal())
    }

    const handleLanguageES = () => {
        dispatch(uiLanguageES())
    }

    const handleLanguageEN = () => {
        dispatch(uiuiLanguageEN())
    }

    const handleLink = () => {
        dispatch(uiCloseModal());
    }


    return (
        <div>
            <Modal
                isOpen={modalOpen}
                // isOpen={true}
                // onAfterOpen={afterOpenModal}
                closeTimeoutMS={200}
                onRequestClose={closeModal}
                // style={customStyles}
                className="modal"
                overlayClassName="modal-fondo">

                <div className="contenido-menu">
                    <div className="menu-section-1">
                        <div>
                            <Link to="/work" onClick={handleLink} className="link">
                                <FormattedMessage id="modal.proyects" defaultMessage="" />
                            </Link>
                        </div>

                        <div>
                            <Link to="/certificates" onClick={handleLink} className="link">
                                <FormattedMessage id="modal.certificates" defaultMessage="" />
                            </Link>
                        </div>



                    </div>

                    <div className="menu-section-2">
                        <div style={{ color: '#BFCFD0' }}>
                            <FormattedMessage id="modal.hello" defaultMessage="" />
                        </div>
                        <div>
                            <a href="mailto:jonathan.mc.96@hotmail.com" target="_blank" className="link">jonathan.mc.96@hotmail.com</a>
                            
                            </div>
                        <div>
                            <Link to={{pathname:"https://t.me/jonaxmc"}} target="_blank" className="link">
                                t.me/jonaxmc
                            </Link>
                        </div>
                        
                    </div>
                    <div className="menu-section-3">
                        <div className="btn-language btn-es" onClick={handleLanguageES} style={(language === 'es-MX') ? { fontWeight: '700', textDecoration: 'underline' } : { fontWeight: '400' }} >ES</div>
                        <div className="btn-language btn-en" onClick={handleLanguageEN} style={(language === 'en-US') ? { fontWeight: '700', textDecoration: 'underline' } : { fontWeight: '400' }}  >EN</div>
                    </div>


                </div>
            </Modal>
        </div>
    )
}
