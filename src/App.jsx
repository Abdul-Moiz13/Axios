import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [myData, setmydata] = useState([])
  const [isError, setMyError] =useState("");
  // useEffect(() => {
  //     axios.get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res)=>
  //       setmydata(res.data)).catch((error)=>  
  //       setMyError(error.message));
  // }, [])
  const getApiData = async()=>{
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setmydata(res.data);
    } catch (error) {
      setMyError(error.message);
    }
   
  }
  useEffect(()=>{
    getApiData ();
  },[]) 
  return (
    <>
  {isError != "" && <h2>{isError}</h2>}
   <h1>Axios practise</h1>
   <div className='grid'>
   {
   myData.map((post)=>{
    const{id,title,body} =post
    return <div className='card' key={id}>
      <h1>{title.slice(0,15).toUpperCase()}</h1>
      <p>
      ={body .slice(0,100)}
      </p>
    </div>
   })
   
}
</div>
</>
  )
}

export default App
