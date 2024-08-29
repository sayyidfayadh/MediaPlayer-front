import React from 'react'
import { Button,Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addVideoHistoryAPI, deleteVideosAPI } from '../../services/allAPI';

function VideoCard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {setShow(true);
    const{name,link}=video;
    let today=new Date()
  // console.log(new Intl.DateTimeFormat('en-IN',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(today));
  let timeStamp=new Intl.DateTimeFormat('en-IN',{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(today);
  let videohistory={name,link,timeStamp}
  //api call
await addVideoHistoryAPI(videohistory)

  }
  const removeVideo=async(id)=>{
    await deleteVideosAPI(id)
    setDeleteVideoResponse(true)
  }
  const dragStarted=(e,id)=>{
    console.log("drag started"+id);
    e.dataTransfer.setData("VideoID",id)
    
  }
  return (
    <div>
       <Card style={{ width: '18rem' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
      <Card.Img variant="top" onClick={handleShow} src={video?.url} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
          <h3>{video?.name}</h3>
        {insideCategory?null:
        <Button onClick={()=>removeVideo(video?.id)} className='d-flex justify-content-right' variant=""><i class="fa-solid fa-trash-can" style={{color:' #ff0000'}}></i></Button>
}
        </Card.Title>

       
      </Card.Body>
    </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Title</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="460" height="315" src={`${video?.link}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
    </div>
  )
}

export default VideoCard