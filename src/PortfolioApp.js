import React, { useEffect, useState } from 'react'
import { IntlProvider } from 'react-intl'

import { AppRouter } from './router/AppRouter'
import './styles/styles.scss';

import messagesSpanish from './helpers/languages/es-MX.json';
import messagesEnglish from './helpers/languages/en-US.json';
import { useSelector } from 'react-redux';



export const PortfolioApp = () => {

    const { language } = useSelector(state => state.ui)
    

    const [locale, setLocale] = useState('es-MX')
    

   
const [message, setMessage] = useState(messagesSpanish)

//    console.log(messages)

    
    useEffect(() => {
        switch (language) {
            case 'es-MX':
                setMessage(messagesSpanish)
                setLocale('es-MX')
                localStorage.setItem('language','es-MX')
                break;
            case 'en-US':
                setMessage(messagesEnglish)
                setLocale('en-US')
                localStorage.setItem('language','en-US')
                break
            default:
                break;
        }
    }, [language])



    return (
        <IntlProvider messages={message} locale={locale}>
            {/* <h1 style={{zIndex:'9999', position:'absolute'}}>Hola mundo</h1>   */}
            <AppRouter />
            
        </IntlProvider>
    )
}
