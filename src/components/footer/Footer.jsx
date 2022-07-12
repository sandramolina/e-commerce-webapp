import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container className='footer' fluid>
        <Row>
          <Col className='text-center container-top'>
            <Button className='top' />
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <h2>{t('follow')} SO Fetch!</h2>
            <p>Social media icons</p>
          </Col>
          <hr />
          <Col>
            <h2>{t('inside')} SO Fetch!</h2>
            <p>{t('about_us')} SO Fetch!</p>
            <p>{t('contact_us')}</p>
            <p>{t('careers')}</p>
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
};

export default Footer;
