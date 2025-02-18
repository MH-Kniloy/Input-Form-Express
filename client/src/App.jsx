import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
useEffect(()=>{
  fetch("http://localhost:3000/").then((req)=> req.json()).then((data)=>setData(data))
},[])

  return (
    <>
     <h1>{data.map((item)=>(
      item.name
     ))}</h1>
    </>
  )
}

export default App
