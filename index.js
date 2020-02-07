const core = require('@actions/core');
const github = require('@actions/github');
const nodemailer = require('nodemailer');

try {
  const transporter = nodemailer.createTransport({
    host: core.getInput('server_address'),
    port: core.getInput('port'),
    auth: {
      user: core.getInput('username'),
      pass: core.getInput('password')
    }
  });

  const options = {
    from: core.getInput('from'),
    to: core.getInput('to'),
    subject: core.getInput('subject'),
    text: core.getInput('body')
  };

  transporter.sendMail(options, (error, info) => {
    if (error) {
      throw new Error('Error sending email:' + error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
} catch (error) {
  core.setFailed(error.message);
}

