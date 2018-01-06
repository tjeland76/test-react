import nodemailer from 'nodemailer';
import config from './config';

//const transporter = nodemailer.createTransport({
//  service: 'Gmail',
//  host: 'smtp.gmail.com',
//  port: 465,
//  secure: true,
//  auth: {
//    type: 'OAuth2',
//    user: config.user,
//    clientId: config.clientId,
//    clientSecret: config.clientSecret,
//    refreshToken: config.refreshToken,
//    accessToken: config.accessToken
//  }
//});

const transporter = nodemailer.createTransport({
  //host: 'smtp.gmail.com',
  service: 'Gmail',
  //port: 465,
  //secure: true,
  auth: {
    type: 'OAuth2',
    user: config.user,
    ...config
  }
});

const send = ({ email, name, text }) => {

  const message = {
    from: email,
    to: 'tjeland76@gmail.com',
    subject: `New message from ${name} on wmsc.co.uk`,
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
