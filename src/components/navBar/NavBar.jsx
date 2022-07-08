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
  NavItem,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../../css/main.min.css';

import shoppingBag from '../../images/icons/shoppingbag.svg';
import { openCart } from '../cart/CartModalSlice';
import { displayAll, filterByCategory } from '../product/ProductSlice';

function NavBar() {
  const dispatch = useDispatch();
  const clickOnCart = () => dispatch(openCart());

  const handleCategoryClick = (categoryToFilter) => {
    switch (categoryToFilter) {
      case 'ALL':
        dispatch(displayAll());
        break;
      default:
        dispatch(filterByCategory(categoryToFilter));
    }
  };

  const { t } = useTranslation();

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
              <NavDropdown title={t('products')} id='navbarScrollingDropdown'>
                <NavItem>
                  <Nav.Link
                    as={Link}
                    to='/products/all'
                    onClick={() => handleCategoryClick('ALL')}
                  >
                    {t('all')}
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link
                    as={Link}
                    to='/products/eyes'
                    onClick={() => handleCategoryClick('EYES')}
                  >
                    {t('eyes')}
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link
                    as={Link}
                    to='/products/face'
                    onClick={() => handleCategoryClick('FACE')}
                  >
                    {t('face')}
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link
                    as={Link}
                    to='/products/lips'
                    onClick={() => handleCategoryClick('LIPS')}
                  >
                    {t('lips')}
                  </Nav.Link>
                </NavItem>
                <NavItem>
                  <Nav.Link
                    as={Link}
                    to='/products/nails'
                    onClick={() => handleCategoryClick('NAILS')}
                  >
                    {t('nails')}
                  </Nav.Link>
                </NavItem>
              </NavDropdown>
              <Nav.Link href='WT'>{t('whats_trending')}</Nav.Link>
              <Nav.Link href='F'>{t('faves')}</Nav.Link>
              <Button variant='outline-success'>Sign in/Sign Up</Button>
            </Nav>
            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder={t('search')}
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>{t('search')}</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
