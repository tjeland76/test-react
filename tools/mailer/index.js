import nodemailer from 'nodemailer';
import config from './config';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user: config.user,
    clientId: config.clientId,
    clientSecret: config.clientSecret,
    refreshToken: config.refreshToken,
    accessToken: config.accessToken
  }
});

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: 'tjeland76@gmail.com',
    subject: `New message from ${from} at creating-contact-forms-with-nodemailer-and-react`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            resolve(info);
        }
      
    });
  });
};

export default send;