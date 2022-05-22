import React from 'react'
import { Container, Navbar, Card, CardGroup } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function About() {
  const navigate=useNavigate();
  return (<div>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand onClick={()=>navigate('/')}><b><i> Back </i></b></Navbar.Brand>
    
    </Container>
  </Navbar>
  
  <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://assets.volkswagen.com/is/image/volkswagenag/Taigun-Launch-Front?Zml0PWNyb3AsMSZmbXQ9anBnJnFsdD03OSZ3aWQ9ODAwJmhlaT04MDAmYWxpZ249MC4wMCwwLjAwJmJmYz1vZmYmYmRmNQ==" />
    <Card.Body>
      <Card.Title>volkswagen</Card.Title>
      <Card.Text>
      Volkswagen is a German motor vehicle manufacturer headquartered in Wolfsburg, Lower Saxony, Germany. Founded in 1937 by the German Labour Front, known for their iconic Beetle, it is the flagship brand of the Volkswagen Group, the largest car maker by worldwide sales in 2016 and 2017.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/legacy/nameplate/suvs/MY20Ecosport_2160x1440.jpg/_jcr_content/renditions/cq5dam.web.768.768.jpeg" />
    <Card.Body>
      <Card.Title>Ford</Card.Title>
      <Card.Text>
      Ford Motor Company is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand, and luxury cars under its Lincoln luxury brand. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/hero-banner/2022/04_12/gate_models_og_01.jpg" />
    <Card.Body>
      <Card.Title>Lamborghini</Card.Title>
      <Card.Text>
      Automobili Lamborghini S.p.A. is an Italian brand and manufacturer of luxury sports cars and SUVs based in Sant'Agata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

  </div>
  
  )
}

export default About