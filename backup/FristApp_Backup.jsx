import { Fragment } from "react"

const getSaludo = ()=>{
    return "Hola soy una funcion"
}

const newMessge = {
    message: 'Hola mundo',
    title: 'Michele'
};
export const MiNombre = ()=>{
    return (
        
        <Fragment>
            <h1>{getSaludo()}</h1>
            {/*<code>{ JSON.stringify(newMessge)}</code>*/}
            <label>Soy un label</label>
        </Fragment>
        /*
        <div>
            <h1>Michelle</h1>
            <label>Soy un label</label>
        </div>  
        */
    )
}