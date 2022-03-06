export default async (req, res) => {
  let nodemailer = require('nodemailer');
  require('dotenv').config();
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'gabo.email.bot@gmail.com',
      pass: process.env.password,
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
    from: 'gabo.email.bot@gmail.com',
    to: 'gabriel.mendez0@hotmail.com',
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
