export default async (req, res) => {
  let nodemailer = require('nodemailer');
  require('dotenv').config();

  if (
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASSWORD ||
    !process.env.EMAIL_TO
  ) {
    console.error('Missing required environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Server is ready to take our messages');
        resolve(success);
      }
    });
  });

  const mailData = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Message From ${req.body.name} ${req.body.lastname}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<p>Hello Gabriel,</p>
    <p>You got a new message from ${req.body.name}:</p>
    <p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">${req.body.message}</p>
    <p>Sent from: ${req.body.email}</p>`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).end();
};
