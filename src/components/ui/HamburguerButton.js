import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal, uiOpenModal } from '../../actions/ui';

export const HamburguerButton = () => {

    const dispatch = useDispatch();

    const {modalOpen} = useSelector(state => state.ui)
    

    const handleOpenModal = () => {

        if (!modalOpen) {
            dispatch(uiOpenModal())
        } else {
            dispatch(uiCloseModal())
        }
    }

    return (
        <div className={modalOpen ? "toggle active" : "toggle"} onClick={handleOpenModal}>
            <span></span>
            <span></span>
            <span></span>
        </div>

    )
}
