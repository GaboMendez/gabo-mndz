import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import {
  CardWrapper,
  ContactWrapper,
  FullnameWrapper,
  SubmitButton,
  Title,
} from './styles';
import { useSnackbar } from 'notistack';
/**
 * Layout
 *  + contact-page
 *  + contact-form
 *  + form-group
 *  + form-control
 *  + submit-btn btn
 */
const errorMessage = 'Please fill out this field';
const initialUser = {
  name: '',
  lastname: '',
  email: '',
  message: '',
};
const isEmptyObject = (obj) => {
  for (var key in obj) {
    if (key !== 'lastname' && obj[key] === '') {
      return true;
    }
  }
  return false;
};

const ContactSection = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [error, setError] = useState(false);
  const [user, setUser] = useState(initialUser);

  const handleNameChange = (event) =>
    setUser({ ...user, name: event.target.value });

  const handleLastnameChange = (event) =>
    setUser({ ...user, lastname: event.target.value });

  const handleEmailChange = (event) =>
    setUser({ ...user, email: event.target.value });

  const handleMessageChange = (event) =>
    setUser({ ...user, message: event.target.value });

  const handleSubmit = () => {
    if (isEmptyObject(user)) {
      setError(true);
    } else {
      console.log('send email');
      console.log('user values', user);
      setError(false);
      setUser(initialUser);

      enqueueSnackbar('This is a success message!', { variant: 'success' });
    }
  };

  return (
    <ContactWrapper id='contact'>
      <CardWrapper>
        <Title>GET IN TOUCH</Title>
        <FullnameWrapper>
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            value={user.name}
            onChange={handleNameChange}
            error={error && user.name === ''}
            helperText={error && user.name === '' ? errorMessage : ' '}
          />
          <TextField
            id='outlined-basic'
            label='Last name'
            variant='outlined'
            helperText=' '
            value={user.lastname}
            onChange={handleLastnameChange}
          />
        </FullnameWrapper>

        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          value={user.email}
          onChange={handleEmailChange}
          error={error && user.email === ''}
          helperText={error && user.email === '' ? errorMessage : ' '}
          fullWidth
        />

        <TextField
          id='outlined-basic'
          label='Message'
          variant='outlined'
          value={user.message}
          onChange={handleMessageChange}
          error={error && user.message === ''}
          helperText={error && user.message === '' ? errorMessage : ' '}
          rows={3}
          fullWidth
          multiline
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
