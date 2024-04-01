import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {

  return (
    <>
    <Navbar className='navbar' fixed='top' expand='lg'>
        <Container fluid style={{ paddingLeft: 0 }}>
          <Nav className="me-auto">
            {/* <Nav.Link className='link-name' as={Link} to='/' onClick={scrollToTop}>ENHANCE MY NATURAL BEAUTY</Nav.Link> */}
            <Nav.Link>ENHANCE MY <br/>NATURAL BEAUTY</Nav.Link>
          </Nav>
          <Nav className='nav-links'>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Salon</Nav.Link>
            <Nav.Link>Treatments</Nav.Link>
            <Nav.Link>Prices</Nav.Link>
            <Nav.Link>Offers &amp; Packages</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Book Online</Nav.Link>
      
          </Nav>
          </Container>
    </Navbar>   
    </>
  )
}
