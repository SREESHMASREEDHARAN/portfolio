import React from 'react'
import  { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
    const [openNavExternal, setOpenNavExternal] = useState(false);
  return (
    <div>
    <MDBCollapse open={openNavExternal}  style={{float:'right'}}>
        <div className=' p-4 '>
          
          <Link to={'/'} style={{textDecoration:'none'}}>
          <span className='text-muted'>Home</span> <br />
          </Link>
          <Link to={'/about'} style={{textDecoration:'none'}}>
          <span className='text-muted'>About</span><br />
          </Link>
          <Link to={'/portfolio'} style={{textDecoration:'none'}}>
          <span className='text-muted'>PortFolio</span><br />
          </Link>
          <Link to={'/contact'} style={{textDecoration:'none'}}>
          <span className='text-muted'>Contact Me</span><br />
          </Link>
        </div>
      </MDBCollapse>
      <MDBNavbar dark bgColor='dark' style={{float:'right'}}>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavExternal(!openNavExternal)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header
