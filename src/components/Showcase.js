import React, {useState, useEffect} from 'react'
import Calcontainer from '../components/Calcontainer'
import {useSelector, useDispatch} from 'react-redux'
import {getchresult} from '../action/getresult'





const Showcase = () => {
  /*Here i will updatethe store about the result */

  const responsia = useDispatch();





  /*Accessing the data from the store*/
  let etat = useSelector(state => state)
  const operation = etat.choosedoperation.value;
  const opeValue = etat.enterednumbers.value;




  


  
  const getData = async() =>{
    
    
    let num1 = 26;
    let num2 = 15;
    console.log(num1)
  

  const res = await fetch(`http://localhost:8080/restfulMathCalculatoro/rest/calculator/${operation}/${num1}/${num2}`)
  const data = await res.text();
  let parser = new DOMParser();
      const value = await parser.parseFromString(data, 'text/html')
      const actualValue = value.getElementsByTagName('result');
      /*************Our operation result */
        const myResult = actualValue[0].innerHTML
        responsia(getchresult(myResult))
        console.log(myResult);
  
}

useEffect(()  =>{
  getData();
}, [operation])


  return (
    <div className="showcase">
      <Calcontainer/>
    </div>
  )
}

export default Showcase
