import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { CardWrapper, ContactWrapper, Title } from './styles';
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
      </CardWrapper>
    </ContactWrapper>
  );
};

export default ContactSection;
