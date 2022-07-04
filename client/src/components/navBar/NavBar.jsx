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
// eslint-disable-next-line spaced-comment
//import searchIcon from '../../images/icons/search.svg';

function NavBar() {
  return (
    <Navbar bg='light' expand='lg' fixed='top'>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <img
            src='/logo.png'
            width='100'
            height='50'
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
            <Nav.Link href='#action1'>Home</Nav.Link>
            <NavDropdown title='Link' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
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
