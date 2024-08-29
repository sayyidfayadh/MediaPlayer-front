import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
function Home() {
  const[uploadVideoResponse,setuploadVideoResponse]=useState({})
  const [dropVideoResponse,setDropVideoResponse]=useState({})
  return (
    <div>
      <div className="container mt-3 mb-3 d-flex justify-content-between">
        <div className="add-videos">
          <Add setuploadVideoResponse={setuploadVideoResponse}/>
        </div>
        <Link to={'/history'} style={{textDecoration:"none",fontSize:'30px'}} className='text-dark' >Watch History<i class="fa-solid fa-arrow-right text-warning "></i> </Link>
      </div>
      <div className="container-fluid mt-5 mb-3 w-100 row">
        <div className="all-videos col-lg-9">
          <h2>All Videos</h2>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} insideCategory={true} />
        </div>
        <div className="category col-lg-3">
          <Category dropVideoResponse={dropVideoResponse}/>
        </div>
      </div>
    </div>
  )
}

export default Home