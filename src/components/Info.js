import React, {useState, useEffect} from 'react'
import{useSelector} from 'react-redux'

const Info = () => {
  const selection = useSelector(state => state.choosedoperation.value)

console.log(selection)
  const [data, setData]= useState()



const getData = async() =>{
  const req = await fetch(`https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&exchars=200&titles=${selection}&format=json&explaintext=true`)

  const res =  await req.json();
  let donnee = res.query.pages
  
  if(selection === 'addition'){
    setData(donnee[61338].extract)git 
    console.log(donnee[61338].extract)
  }
  else if(selection === 'substraction'){
    setData(donnee[24774866].extract)
  }
  else{
    setData(donnee[20845].extract)
  }

}


  useEffect(() =>{
  
    getData()

  }, [selection])

  return (
    <div className="info">
      <h1>Information</h1>
           <p>{data}</p>
    </div>
  )
}

export default Info
