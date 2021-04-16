import React, {useState, useEffect} from 'react'
import{useSelector} from 'react-redux'

const Info = () => {
  const selection = useSelector(state => state.choosedoperation.value)


  const [data, setData]= useState()



const getData = async() =>{
  const req = await fetch(`http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&exchars=200&titles=${selection}&format=json`,  {
    mode: 'cors',
    method: 'GET',
    cache: 'no-cache',
    credentials:'same-origin',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "withCredentials": 'false'
    }})

  const res =  await req.json();
  console.log(res)

}


  useEffect(() =>{
  
    getData()

  }, [selection])

  return (
    <div className="info">
      <h1>Information</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, itaque illum. Accusamus deserunt numquam quae pariatur maxime tempore impedit repellat fugit nam ea ex, dolorum reiciendis nobis quos esse reprehenderit perspiciatis eius, molestias molestiae expedita placeat cum in fuga libero. Hic doloribus a omnis eos, eius consequatur, odio vel soluta laborum asperiores illo ex eligendi sed illum assumenda quae quibusdam?</p>
    </div>
  )
}

export default Info
