import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Theme } from '@radix-ui/themes';



ReactDOM.createRoot(document.getElementById('root')).render(

    <Theme>
    <App />
    </Theme>


)
