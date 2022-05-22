import React from 'react'
import { Container, Nav, Navbar,Button,Card } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate=useNavigate();
  return (<div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand Link to="/"><b><i>Mr.Raj</i></b></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link to="/">Home</Nav.Link>
      <Nav.Link onClick={()=>navigate('/about')}>About</Nav.Link>
    </Nav>
    <Nav>
    <Button variant="dark" onClick={()=>navigate('/register')}>Register</Button>
    <Button variant="outline-light" onClick={()=>navigate('/login')}>Login</Button>
    </Nav>
    </Container>
  </Navbar>
  <Card className="bg-dark text-white">
  <Card.Img src="https://mclaren.scene7.com/is/image/mclaren/Mclaren_Artura_Zenith%20Black_03:crop-16x9?wid=1980&hei=1114" alt="Card image" />
  <Card.ImgOverlay>
    <br/>
    <Card.Title><h2>Welcome to Raj motors</h2></Card.Title>
    <br/>
    <Card.Text>
      Register and Book for the  wonderful showcase !!.
      <br/><b>Participate now</b>
    </Card.Text>
    <Card.Text>Cooming Soon</Card.Text>
    <Button variant="light">Book</Button>
  </Card.ImgOverlay>
</Card>
  </div>
  
  )
}

export default Home