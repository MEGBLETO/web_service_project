import React from 'react'
import {useSelector} from 'react-redux';

const Output = () => {


  const operation = useSelector(state => state.choosedoperation)
  const result = useSelector(state => state.enterednumbers)

  return (
    <div className="output">
      <div className="output-container">
        <h3>{operation.value}</h3>
       {/*<h3>{result}</h3>*/}
      </div>
    </div>
  )
}

export default Output
