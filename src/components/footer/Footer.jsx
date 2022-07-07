import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css';

const Footer = () => (
  <>
    <Container className='footer' fluid>
      <Row>
        <Col className='text-center'>
          <span>🔝</span>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col>
          <h2>Follow SO Fetch!</h2>
          <p>Social media icons</p>
        </Col>
        <hr />
        <Col>
          <h2>Inside SO Fetch!</h2>
          <p>about SO Fetch!</p>
          <p>Contact Us</p>
          <p>Careers</p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center py-3'>
          Made with 💜 by{' '}
          <a href='https://github.com/sandramolina'>San Molina Palencia</a>
        </Col>
      </Row>
    </Container>
  </>
);

export default Footer;
