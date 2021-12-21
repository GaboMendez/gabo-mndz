import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { CardWrapper, ContactWrapper, SubmitButton, Title } from './styles';
/**
 * Layout
 *  + contact-page
 *  + contact-form
 *  + form-group
 *  + form-control
 *  + submit-btn btn
 */
const ContactSection = () => {
  const [name, setName] = useState('namee');
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleNameChange = (event) =>
    setUser({ ...user, name: event.target.value });

  const handleLastnameChange = (event) =>
    setUser({ ...user, lastname: event.target.value });

  const handleEmailChange = (event) =>
    setUser({ ...user, email: event.target.value });

  const handleMessageChange = (event) =>
    setUser({ ...user, message: event.target.value });

  const handleSubmit = () => {
    console.log('user', user);
    setUser({ ...user, lastname: event.target.value });
  };

  return (
    <ContactWrapper id='contact'>
      <CardWrapper>
        <Title>GET IN TOUCH</Title>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 8,
            columnGap: 8,
          }}
        >
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            value={user.name}
            onChange={handleNameChange}
          />
          <TextField
            id='outlined-basic'
            label='Last name'
            variant='outlined'
            value={user.lastname}
            onChange={handleLastnameChange}
          />
        </div>

        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          margin='normal'
          value={user.email}
          onChange={handleEmailChange}
          fullWidth
        />
        <TextField
          id='outlined-basic'
          label='Message'
          variant='outlined'
          margin='normal'
          value={user.message}
          onChange={handleMessageChange}
          fullWidth
          multiline
          rows={3}
        />

        <SubmitButton onClick={handleSubmit}>
          <div className='svg-wrapper'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
            >
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path
                fill='currentColor'
                d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
              ></path>
            </svg>
          </div>
          <span>SEND</span>
        </SubmitButton>
      </CardWrapper>
    </ContactWrapper>
  );
};

export default ContactSection;
