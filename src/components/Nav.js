import React from 'react'
import {selectedop} from '../action/getselection'
import {useDispatch} from 'react-redux';

const Nav = () => {

const dispatch = useDispatch();

const getValue = (e) =>{
  let value = e.target.value;
  dispatch(selectedop(value))
  //console.log(value)
}


  return (
    <div className="nav">
      <div className="title">
      <h1>Math Calculator</h1>
      </div>

      <div className="liste">
        <label id="label" htmlFor="operation">Choose an operation:</label>

        <select name="operation" id="operation" onChange={(e) => getValue(e)}>
          <option value="">--Please choose an operation--</option>
          <option value="add">Addition</option>
          <option value="sub">Substraction</option>
          <option value="mul">Multiplication</option>
        </select>
      </div>
    </div>
  );
}

export default Nav
