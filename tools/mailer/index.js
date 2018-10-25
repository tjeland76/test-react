import nodemailer from 'nodemailer';
import config from './config';

const transporter =  nodemailer.createTransport({
  host: config.host, // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: config.port, // port for secure SMTP
  tls: {
    ciphers:'SSLv3'
  },
  auth: {
    user: config.email,
    pass: config.password
  }
});

const send = ({ email, name, text }) => {

  const message = {
    from: email,
    to: config.email,
    subject: `New message from ${name} on warringtonmasters.co.uk`,
    text
  };

  console.log(message);

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
