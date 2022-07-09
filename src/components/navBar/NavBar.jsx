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
  Dropdown,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Flag from 'react-flagkit';

import '../../css/main.min.css';
import './NavBar.css';

import { ReactComponent as ShoppingBag } from '../../images/icons/shoppingbag.svg';
import { ReactComponent as Globe } from '../../images/icons/globe.svg';
import { openCart } from '../cart/CartModalSlice';
import {
  displayAll,
  displayFaves,
  filterByCategory,
} from '../product/ProductSlice';

import languages from './languages';

function NavBar() {
  const dispatch = useDispatch();
  const clickOnCart = () => dispatch(openCart());

  const handleCategoryClick = (categoryToFilter) => {
    switch (categoryToFilter) {
      case 'ALL':
        dispatch(displayAll());
        break;
      case 'FAVES':
        dispatch(displayFaves());
        break;
      default:
        dispatch(filterByCategory(categoryToFilter));
    }
  };

  const { t } = useTranslation();

  const languagesNodes = languages.map(({ code, countryCode, name }) => (
    <Dropdown.Item
      key={countryCode}
      onClick={() => i18next.changeLanguage(code)}
    >
      <Flag
        country={countryCode}
        alt={`Flag of ${countryCode}`}
        className='flag'
      />
      {name}
    </Dropdown.Item>
  ));
  return (
    <>
      <Navbar bg='light' expand='lg' fixed='top'>
        <Container fluid>
          <Link to='/'>
            <Navbar.Brand>
              <img
                src='/logo.png'
                className='d-inline-block align-top logo'
                alt='So fetch! makeup logo'
              />
            </Navbar.Brand>
          </Link>
          <Dropdown>
            <Dropdown.Toggle id='dropdown-basic' className='globe-btn'>
              <Globe />
            </Dropdown.Toggle>
            <Dropdown.Menu>{languagesNodes}</Dropdown.Menu>
          </Dropdown>
          <Nav>
            <ShoppingBag onClick={clickOnCart} />
          </Nav>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
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
            <Nav.Link
              as={Link}
              to='/products/faves'
              onClick={() => handleCategoryClick('FAVES')}
            >
              {t('faves')}
            </Nav.Link>
            <Button variant='outline-success'>Sign in/Sign Up</Button>
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
