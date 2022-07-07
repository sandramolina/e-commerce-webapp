import React from 'react';

import { useDispatch } from 'react-redux';
import {
  Button,
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../css/main.min.css';

import shoppingBag from '../../images/icons/shoppingbag.svg';
import { openCart } from '../cart/CartModalSlice';

function NavBar() {
  const dispatch = useDispatch();
  const clickOnCart = () => dispatch(openCart());

  return (
    <>
      <Navbar bg='light' expand='lg' fixed='top'>
        <Container fluid>
          <Link to='/'>
            <Navbar.Brand>
              <img
                src='/logo.png'
                width='93'
                height='26'
                className='d-inline-block align-top'
                alt='So fetch! makeup logo'
              />
            </Navbar.Brand>
          </Link>
          <Nav>
            <button onClick={clickOnCart} type='button'>
              <img
                src={shoppingBag}
                alt='Shopping cart'
                className='shopping-bag d-flex'
              />
            </button>
          </Nav>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title='PRODUCTS' id='navbarScrollingDropdown'>
                <Link to='/products'>
                  <p>ALL</p>
                </Link>
                <NavDropdown.Item href='#face'>FACE</NavDropdown.Item>
                <NavDropdown.Item href='#lips'>LIPS</NavDropdown.Item>
                <NavDropdown.Item href='#nails'>NAILS</NavDropdown.Item>
              </NavDropdown>
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
    </>
  );
}

export default NavBar;
