import React from 'react';

import {
  Button,
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from 'react-bootstrap';

import '../../css/main.min.css';

import shoppingBag from '../../images/icons/shoppingbag.svg';

function NavBar() {
  return (
    <Navbar bg='light' expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <img
            src='/logo.png'
            width='93'
            height='26'
            className='d-inline-block align-top'
            alt='So fetch! makeup logo'
          />
        </Navbar.Brand>
        <Nav>
          <img
            src={shoppingBag}
            alt='Shopping cart'
            className='shopping-bag d-flex'
          />
        </Nav>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title='PRODUCTS' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#eyes'>EYES</NavDropdown.Item>
              <NavDropdown.Item href='#face'>FACE</NavDropdown.Item>
              <NavDropdown.Item href='#lips'>LIPS</NavDropdown.Item>
              <NavDropdown.Item href='#nails'>NAILS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='LE'>LIMITED EDITION</Nav.Link>
            <Nav.Link href='WT'>WHAT&#39;S TRENDING</Nav.Link>
            <Nav.Link href='F'>FAVOURITES</Nav.Link>
            <Button variant='outline-success'>Sign in/Sign Up</Button>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
