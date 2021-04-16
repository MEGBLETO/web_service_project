import React from 'react'
import {useSelector} from 'react-redux';

const Output = () => {


  const result = useSelector(state => state.reponse.value)

  console.log(result)
  return (
    <div className="output">
      <div className="output-container">
       <h3 id="reponse">{result}</h3>
      </div>
    </div>
  )
}

export default Output
