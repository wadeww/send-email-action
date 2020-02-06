const core = require('@actions/core');
const github = require('@actions/github');
const nodemailer = rqeuire('nodemailer');

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
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
} catch (error) {
  core.setFailed(error.message);
}

