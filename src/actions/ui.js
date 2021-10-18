import { types } from "../types/types";



export const uiOpenModal=()=>({type: types.uiOpenModal});
export const uiCloseModal=()=>({type: types.uiCloseModal});
export const uiLanguageES=()=>({type: types.uiLanguageES});
export const uiuiLanguageEN=()=>({type: types.uiLanguageEN});

export const activePage=()=>{
    return ()=>{
        console.log('okkkkkkkkk')
    }
}

export const uiActivePage=()=>({type: types.uiPage});