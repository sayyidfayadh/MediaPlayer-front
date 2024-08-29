import React from 'react'
 import { Button, Card, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
<div className='mt-5'>  
<Row className='mt-5 align-items-center justify-content-between w-100 mb-3'>
<Col></Col>
<Col lg={5}>
<h1 style={{fontSize:'40px'}}>Welcome To <span className='text-warning'>MediaPlayer</span></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laborum mollitia atque minima possimus nemo saepe inventore explicabo, veniam sint provident rerum ut neque ipsam quam animi. Cum, iure porro.</p>
<Button className='btn btn-warning' onClick={()=>navigateByUrl('/home')}>Get Started</Button>
</Col>
<Col lg={5}>
<img height={'500px'} width={'120%'} src="https://www.wowza.com/wp-content/uploads/Video-player.jpeg" alt="" />
</Col>
<Col></Col>
</Row>
<h1 className='text-center text-warning mt-5 bg-body-tertiary'>Features</h1>
<div className='container mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>

   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'400px'} src="https://artotion.com/wp-content/uploads/2024/01/Explainer-video_animated.gif" />
      <Card.Body>
        <Card.Title  className='text-warning'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'400px'} src="https://media.tenor.com/hQjH8Xo3jdwAAAAM/rolling-tape-the-fabelmans.gif" />
      <Card.Body>
        <Card.Title className='text-warning'>Categorised Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'300px'} width={'400px'} src="https://cartoonsco-media.s3.amazonaws.com/uploads/2022/08/animated-sand-clock-gif.gif" />
      <Card.Body>
        <Card.Title  className='text-warning'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

</div>
<div className="container border rounded p-4 border-warning mt-5 d-flex align-items-center justify-content-center  mb-5">
  <div className="col-lg-5">
    <h2 className='text-warning text-underline'>Simple,Powerful & Fast</h2> 
    <h6 className='mb-5 mt-4'><span className='text-warning'>Play Everything</span> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur accusantium ipsum nesciunt quis beatae. Ad ducimus ipsa tempora, atque rerum quod porro adipisci cumque earum! Quod ipsum nemo reiciendis! </h6>
    <h6 className='mb-5 mt-4'><span className='text-warning'>Categorize Video</span> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur accusantium ipsum nesciunt quis beatae. Ad ducimus ipsa tempora, atque rerum quod porro adipisci cumque earum! Quod ipsum nemo reiciendis! </h6>
    <h6 className='mb-5 mt-4'><span className='text-warning'>Managing Videos</span> :Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur accusantium ipsum nesciunt quis beatae. Ad ducimus ipsa tempora, atque rerum quod porro adipisci cumque earum! Quod ipsum nemo reiciendis! </h6>
  
  </div>
  <div className="col-lg-5 ms-5">
  <iframe width="560" height="415" src="https://www.youtube.com/embed/B4VOThlleaw?si=FwOv2USSNrWK54CB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
  </div>

</div>
</div>  

  )
}

export default LandingPage