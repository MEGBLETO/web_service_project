import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {enterednum} from '../action/getnumbers'



const Calc = () => {

  const actuator = useDispatch();

const [num, setNumbers] = useState([
  {
    num1 : 0,
    num2 : 0
  }
])

//passing the data




const getInputvalue = (e) =>{
  
  const newData = {...num}
  
  newData[e.target.id] = e.target.value;
  setNumbers(newData)
  
  actuator(enterednum(num))
  //console.log(newData)

}




  return (
    <div className="calc">

      <div className="item">
      <label htmlFor="Num 1">Num 1:</label>
      <input type="text" id="num1" name="num1" onChange={(e) => getInputvalue(e)}/>
      </div>
      <div className="item2">
      <label htmlFor="Num 1">Num 2:</label>
      <input type="text" id="num2" name="num2" onChange={(e) => getInputvalue(e)}/>
      </div>
      
    </div>
  )
}

export default Calc;
