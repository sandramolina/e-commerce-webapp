import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CheckOutForm = () => {
  const handleSubmitClick = (event) => event.preventDefault();

  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Save my details' />
      </Form.Group>
      <Button
        variant='primary'
        type='submit'
        onClick={handleSubmitClick}
        className='checout-button'
      >
        Sign in/Sign up
      </Button>
    </Form>
  );
};
export default CheckOutForm;
