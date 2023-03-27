import React from 'react'
import ReactDOM from 'react-dom/client'
import { MiNombre } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css'

//import { HelloWordApp, MiNombre } from './HelloWordApp';
/*
import {App} from './HelloWordApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
*/


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MiNombre tittle='Aplicacion de React' subTitle = 'Example123' />
        <CounterApp value={10}/>
    </React.StrictMode>
    
);

//Si se quiere enviar un valor boleano, se debe colocar 
/*
Solo el nombre dentro de la r

*/ 
