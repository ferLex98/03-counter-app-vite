import { Fragment } from "react"
import PropTypes from 'prop-types'

export const MiNombre = ({
    tittle,
    subTitle= 'La tierra explota',
    name = 'Michelle' 
})=>{

    //console.log(props);
    return (
        
        <Fragment>
            <h1>{tittle}</h1>
            {/*<code>{ JSON.stringify(newMessge)}</code>*/}
            <label>{subTitle +1 }</label>
            <p>{name}</p>
        </Fragment>
     
    )
}

MiNombre.propTypes={
    tittle:PropTypes.string.isRequired,
    subTitle:PropTypes.string.isRequired
}


//Default props 

MiNombre.defaultPropd = {
    title: 'No hay titulo',
    subTitle: 'No hay sub titulo', 
    name: 'Fernando Herrera'
}