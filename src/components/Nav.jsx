import Container from 'react-bootstrap/Container'
import { Nav, Navbar, NavDropdown, Dropdown, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Nav'


export default function NavBar() {

  return (
    <>
    <Navbar className='navbar' fixed='top' expand='lg'>
        <Container className='d-flex flex-column' fluid>
        
          <div className="nav-info">
          <p className="email">info@email.com</p>
          <Nav className="w-100 justify-content-center">
            <Nav.Link className="enhance-text" as={Link} to='/'>Enhance My Natural Beauty</Nav.Link>
          </Nav>
          <p className="mobile">07772519590</p></div>
          <div className='divider'></div>
          <Nav className="nav-links w-100 justify-content-evenly">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            
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
        <NavDropdown.Item as={Link} to='/jelly-masks'>Hyperboost Jelly Masks</NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/LED-light-therapy'>LED Light Therapy</NavDropdown.Item>
        
      </NavDropdown>
            <Nav.Link as={Link} to='/price-list'>Price List</Nav.Link>
            <Nav.Link as={Link} to='offers-packages'>Offers &amp; Packages</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            
      
          </Nav>
          </Container>
    </Navbar>   
    </>
  )
}
