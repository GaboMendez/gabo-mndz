import React from 'react';
import { ContactWrapper, Title } from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ContactSection = () => {
  return (
    <ContactWrapper id='contact'>
      <Title alignCenter>GET IN TOUCH</Title>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant='h5' component='div'>
            be nev-o-lent
          </Typography>
          <Typography sx={{ mb: 1.5 }}>adjective</Typography>
          <Typography variant='body2'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    </ContactWrapper>
  );
};

export default ContactSection;
