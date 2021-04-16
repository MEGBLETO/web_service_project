import React, {useState, useEffect} from 'react'
import Calcontainer from '../components/Calcontainer'
import {useSelector} from 'react-redux'





const Showcase = () => {
  const operation = useSelector(state => state.choosedoperation)
  const opeValue = operation.value
  /*let numbersObject = useSelector(state =>state.enterednumbers.value)
  

  let values = numbersObject

  const [val , setval] = useState()

  //setval(values)
  
   if(numbersObject){

    setval(numbersObject)
   }else{
      <h1>Loading</h1>
   }
   */


   console.log(operation)

const getData = async() =>{
  const res = await fetch(`http://localhost:8080/restfulMathCalculatoro/rest/calculator/'${opeValue}'/3/9`)
  const data = await res.text();
  let parser = new DOMParser();
      const value = await parser.parseFromString(data, 'text/html')
      const actualValue = await value.getElementsByTagName('result');
      /*************Our operation result */
      const myResult =actualValue[0].innerHTML
      console.log(myResult);
}

useEffect(()  =>{
  getData();
}, [])


  return (
    <div className="showcase">
      <Calcontainer/>
    </div>
  )
}

export default Showcase
