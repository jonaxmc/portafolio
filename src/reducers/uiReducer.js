import { types } from "../types/types";

const lan = localStorage.getItem('language') || 'es-MX'

const initialState = {
    modalOpen: false,
    language: lan,
    page: 0
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
        case types.uiLanguageES:
            return {
                ...state,
                language: 'es-MX'
            }
        case types.uiLanguageEN:
            return {
                ...state,
                language: 'en-US'
            }
        case types.uiPage:
            return{
                ...state,
                page: 2
            }
       


        default:
            return state;
    }
}