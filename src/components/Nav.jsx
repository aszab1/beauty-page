import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown, Dropdown, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function NavBar() {

  return (
    <>
    <Navbar className='navbar' fixed='top' expand='lg'>
        <Container fluid style={{ paddingLeft: 0 }}>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>ENHANCE MY <br/>NATURAL BEAUTY</Nav.Link>
          </Nav>
          <Nav className='nav-links'>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/salon'>Salon</Nav.Link>
            
            <NavDropdown title="Treatments" id="treatments-dropdown">
            {/* <NavDropdown title="Chemical Peels" id="chemical-peels-dropdown"> */}
            <Dropdown as={ButtonGroup}>
      <Button variant="none" as={Link} to='/treatments/chemical-peels'>Chemical Peels</Button>
            <Dropdown.Toggle split variant="none" id="dropdown-split-basic" />

              
              <Dropdown.Menu>
              <Dropdown.Item>Infini BioAge Peel</Dropdown.Item>
              <Dropdown.Item>Stayve Seanery Peel</Dropdown.Item>
              </Dropdown.Menu>
        {/* </NavDropdown> */}
        </Dropdown>
        <NavDropdown.Item as={Link} to='/microneedling'>Microneedling</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/skin-boosters'>Skin Boosters</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/fat-dissolving'>Fat dissolving</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/vitamin-shots'>Vitamin Shots</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/additional-treatments'>Additional Treatments</NavDropdown.Item>
        
      </NavDropdown>
            <Nav.Link as={Link} to='/prices'>Prices</Nav.Link>
            <Nav.Link as={Link} to='offers-packages'>Offers &amp; Packages</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            <Nav.Link as={Link} to='/book'>Book Online</Nav.Link>
      
          </Nav>
          </Container>
    </Navbar>   
    </>
  )
}
