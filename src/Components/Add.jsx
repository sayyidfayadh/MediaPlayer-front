import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../../services/allAPI';
function Add({setuploadVideoResponse}) {
const [uploadVideo,setUploadVideo]=useState({id:"",name:"",url:"",link:""})

// console.log(uploadVideo);
const getYoutubeLink=(e)=>{
  const {value}=e.target
  if (value.includes("v=")){
  let VID=value.split("v=")[1].slice(0,11)
  console.log(`https://www.youtube.com/embed/${VID}`);
  setUploadVideo({...uploadVideo,link:`https://www.youtube.com/embed/${VID}`})
}
else{
  setUploadVideo({...uploadVideo,link:""})
}
}
 const handleAdd=async()=>{
  const{id,name,url,link}=uploadVideo
if(!id || !name || !url || !link){
  alert("fill missing fields")

}
else{
  //upload to json server
  const result=await uploadVideoAPI(uploadVideo)
// console.log(result);
if(result.status>=200 && result.status<=300){
  alert("video uploaded")
  handleClose()
  //empty fields
  setUploadVideo({ id:"",name:"",url:"",link:"" })
  setuploadVideoResponse(result.data)
 
}
else{
  alert(result.message)
}
}
 }
 


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    <div className='d-flex mt-5 mb-5 align-items-center'>
      <h2>Upload Videos</h2>
      <button className='btn mb-2 ms-2 bg-warning'onClick={handleShow}><i class="fa-solid fa-upload fa-lg" style={{color: 'white'}}></i></button> 
    </div>
<Modal
show={show}
onHide={handleClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Modal title</Modal.Title>
</Modal.Header>
<Modal.Body>
<FloatingLabel
        controlId="floatingInput"
        label="Video ID"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Video-ID" onChange={(e)=>setUploadVideo({...uploadVideo,id:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel  className="mb-3" label="Title">
        <Form.Control type="text" placeholder="Title-Name" onChange={(e)=>setUploadVideo({...uploadVideo,name:e.target.value})} />
      </FloatingLabel>
      <FloatingLabel  className="mb-3" label="Image URL">
        <Form.Control className="mb-3" type="text" placeholder="Image-URL" onChange={(e)=>setUploadVideo({...uploadVideo,url:e.target.value})}/>
      </FloatingLabel>
      <FloatingLabel  className="mb-3" label="Video URL">
        <Form.Control type="text" placeholder="Video-URL" onChange={getYoutubeLink} />
      </FloatingLabel>

</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
  <Button variant="primary"onClick={handleAdd}>Add</Button>
</Modal.Footer>
</Modal>
</div>
  )
}

export default Add