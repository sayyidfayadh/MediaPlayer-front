import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="" className='text-warning fw-bolder'>
          <Link style={{textDecoration:'none'}} className='text-warning' to={'/'}><h2><i class="fa-solid fa-play fa-flip"></i>  Media Player</h2></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header