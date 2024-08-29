import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletVideoHistoryAPI, getVideoHistoryAPI } from '../../services/allAPI'

function WatchHistory() {
  const[history,setHistory]=useState([])
  useEffect(()=>{
    getHistory();
  },[])
  const getHistory=async()=>{
    const result=await getVideoHistoryAPI()
    if(result.status==200){
      setHistory(result.data)
    }
    else{
      console.log("api failed");
      console.log(result.message);  
    }
  }
  const removeVideoHistory=async(id)=>{
    await deletVideoHistoryAPI(id)
    getHistory()
  }
  return (
    <>
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      <h2>Watch History</h2>
      <Link to={'/home'} style={{textDecoration:'none',color:'black'}}>Back To Home <i className='fa-solid fa-arrow-rotate-right fa-spin'></i></Link>
    </div>
 <table className='table mb-5 container shadow w-100 text-center'>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>url</th>
      <th>TimeStamp</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {
    history?.length>0?history?.map((video,index)=>(
      <tr>
    <td>{index+1}</td>
    <td>{video?.name}</td>
    <td><a href=''>{video?.link}</a></td>
    <td>{video?.timeStamp}</td>
    <td><button onClick={()=>removeVideoHistory(video?.id)} className='btn p-2 '><i className='fa-solid  fa-trash text-danger'></i></button></td>
    </tr>
 )):<p>no history</p>
 
 }
    
    
  </tbody>
 </table>  
 

 </>
)
}

export default WatchHistory