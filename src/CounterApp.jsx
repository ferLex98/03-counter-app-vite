import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'


export const CounterApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd=()=> {
        setCounter(counter+1)
       // setCounter(()=>2000)

    }


    const handleMin=()=> {
        setCounter(counter-1)
       // setCounter(()=>2000)

    }


    const resetBtn = ()=> {
        setCounter(value)
    }
    return (
    <>
      <div>CounterApp</div>

      <p>{counter}</p>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleMin}>-1</button>
      <button onClick={resetBtn}>Reset</button> 
    </>
  )
}

CounterApp.propTypes={
    value:PropTypes.number.isRequired,
}


//Default props 

CounterApp.defaultPropd = {
    value: 10,
}
