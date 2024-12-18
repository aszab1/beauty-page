import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Nav'
import { Icon } from '@iconify/react'


export default function NavBar() {

  const [showSkinBoosters, setShowSkinBoosters] = useState(false)
  const location = useLocation()
  // const [ scrollToFace, setScrollToFace ] = useState(false)
  // const [ scrollToEyes, setScrollToEyes ] = useState(false)

  const toggleSkinBoosters = (e) => {
    e.stopPropagation() // Prevent dropdown from closing
    setShowSkinBoosters(!showSkinBoosters)
  }

  useEffect(() => {
    const handleClickOutside = () => {
      // Close the skin booster dropdown if a click happens outside the accordion list
      setShowSkinBoosters(false)
    }

    // Add event listener to detect clicks outside the component
    document.addEventListener('click', handleClickOutside)

    return () => {
      // Cleanup the event listener when the component unmounts
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const navbarAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 1 } },
  }
  
  // useEffect(() => {
  //   if (location.pathname === '/skin-boosters') {
  //     if (scrollToFace) {
  //       const faceSection = document.getElementById('face')
  //       if (faceSection) {
  //         faceSection.scrollIntoView({ behavior: 'smooth'})
  //         setScrollToFace(false)
  //       }
  //     } else if (scrollToEyes) {
  //       const eyeSection = document.getElementById('eyes')
  //       if (eyeSection) {
  //         eyeSection.scrollIntoView({ behavior: 'smooth'})
  //         setScrollToEyes(false)
  //       }
  //     } 
  //   }
  // }, [location, scrollToFace, scrollToEyes])



  return (
    <>

      <motion.div
        key={location.pathname}
        initial='hidden'
        animate='visible'
        variants={navbarAnimation}
        style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10 }}
      >
        <Navbar className='navbar' fixed='top' expand='lg'>
        <Container className='d-flex flex-column' fluid>

          <div className="nav-info">
            <Nav className="w-100 justify-content-center">
              <Nav.Link className="enhance-text" as={Link} to='/'>Enhance My Natural Beauty</Nav.Link>
            </Nav>
            {/* <div>
              <section className='email-div'>
                <Icon className='email-icon' icon="ic:outline-email"></Icon>
                <a className="email" href='mailto:info@email.com' >info@email.com</a>
              </section>
              <section className='mobile-div'>
                <Icon className="phone-icon" icon="line-md:phone"></Icon>
                <a className="mobile" href="tel:+447772519590">07772519590</a>
              </section>
            </div> */}
          </div>
          <div className='divider'></div>
          <Nav className="nav-links w-100 justify-content-evenly">
            <Nav.Link as={Link} to='/'>HOME</Nav.Link>

            <NavDropdown title={
              <>
                TREATMENTS <Icon icon="mdi:chevron-down" />
              </>
            }
              id="treatments-dropdown"
            >

              <NavDropdown.Item as={Link} to='/chemical-peels'>Chemical Peels</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/microneedling'>Microneedling</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to='/skin-boosters'>Skin Boosters</NavDropdown.Item> */}
              {/* Skin Boosters Accordion-Style Dropdown */}
              <NavDropdown.Item as="div" onClick={toggleSkinBoosters} className="dropdown-accordion-toggle">
                Skin Boosters <Icon icon={showSkinBoosters ? "mdi:chevron-up" : "mdi:chevron-down"} /> {/* Toggle arrow */}
              </NavDropdown.Item>
              {showSkinBoosters && (
                <div style={{ marginLeft: '0.5rem' }}> {/* Indent the accordion content */}
                  {/* <NavDropdown.Item as={Link} to='/skin-boosters' onClick={() => setScrollToFace(true)}>Face</NavDropdown.Item> */}
                  {/* <NavDropdown.Item as={Link} to='/skin-boosters' onClick={() => setScrollToEyes(true)}>Eyes</NavDropdown.Item> */}
                  <NavDropdown.Item as={Link} to='/skin-boosters/face' >Face</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/skin-boosters/eyes' >Eyes</NavDropdown.Item>

                </div>
              )}
              <NavDropdown.Item as={Link} to='/fat-dissolving'>Fat dissolving</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/vitamin-shots'>Vitamin Shots</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/jelly-masks'>Hyperboost Jelly Masks</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/LED-light-therapy'>LED Light Therapy</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link as={Link} to='/price-list'>PRICE LIST</Nav.Link>
            <Nav.Link as={Link} to='offers-packages'>OFFERS &amp; PACKAGES</Nav.Link>
            <Nav.Link as={Link} to='/contact'>CONTACT</Nav.Link>
            <Icon className='insta' icon='mdi:instagram' onClick={() => window.open('https://www.instagram.com/enhance_my_naturalbeauty?igsh=MXc0cjB4d3AyazVtZg==')}></Icon>


          </Nav>
          </Container>
  </Navbar>
</motion.div>
    </>
  )
}
