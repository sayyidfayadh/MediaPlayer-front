import React, { useEffect } from 'react'
import { useState } from 'react';
import { FloatingLabel, Form,Modal,Button, Col ,Row} from 'react-bootstrap';

import { addVideoCategoryAPI, deletVideoCategoryAPI, getAVideoAPI, getVideoCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import VideoCard from "./VideoCard"
function Category({dropVideoResponse}) {
  const [show, setShow] = useState(false);
  const[categoryName,setCategoryName]=useState("");
  const[allCategories,setAllCategories]=useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const handleAdd=async()=>{
  if(categoryName){
    const result=await addVideoCategoryAPI({categoryName,allVideos:[]})
    if(result.status>=200 && result.status<300){
      handleClose()
      setCategoryName("")
      getCategories()
    }
    else{
      alert(result.message)
    }
  }
  else{
    alert("fil missing fields")
  }
}
  useEffect(()=>{
    getCategories()
  },[])
const getCategories=async()=>{
  const {data}=await getVideoCategoryAPI()
  
  setAllCategories(data)
}

const handleDelete=async(id)=>{
    await deletVideoCategoryAPI(id)
    getCategories()
  }
  const dragOver=(e)=>{
    // console.log("video card dragged over category");
    e.preventDefault()
    
  }
  const videoDropped= async (e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
    console.log("videoid"+videoId,"dropped into category" +categoryId);
    const {data}=await getAVideoAPI(videoId)
    console.log(data);
    const selectedCategory=allCategories.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    const res=await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
    
  }
  // console.log(allCategories);
  const videoDragStarted=(e,videoId,categoryId)=>{

let datashare={videoId,categoryId}
e.dataTransfer.setData("data",JSON.stringify(datashare))
  }
  

  return (
    <>
      <div className="d-grid">
        <button  onClick={handleShow} className='btn btn-info'>Add Category</button>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
          <FloatingLabel controlId='floatingName' label="Category" className='mb-3'>
            <Form.Control type="text" placeholder="Enter Category Name" onChange={e=>setCategoryName(e.target.value)}></Form.Control>
          </FloatingLabel>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary"onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
      {
      allCategories?.length>0?allCategories.map(category=>(
        <div className="border rounded p-4 m-3" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e,category?.id)}>
        <div  className="d-flex justify-content-between align-items-center">
    <h5>{category?.categoryName}</h5>
    <button className='btn' onClick={()=>handleDelete(category?.id)}><i className='fa-solid fa-trash text-danger'></i></button>
        </div>
        <Row>
      {
        category?.allVideos?.length>0?category?.allVideos.map(card=>(
        <Col sm={12} className='mb-3' onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
          <VideoCard video={card}/>
        </Col>
        )):null
      }
        </Row>
        
      </div>
      )):<p>nothing to show here</p>   
}
    </>
  )
}

export default Category