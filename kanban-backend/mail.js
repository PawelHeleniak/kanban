const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendEmail = async ({ receipients, subject, message }) => {
  const mailOptions = {
    from: process.env.MAIL_USER ?? "no-reply@example.com",
    to: receipients,
    subject: subject,
    text: message,
    html: `<h1>Witaj!</h1>`,
  };

  try {
    const info = await transport.sendMail(mailOptions);
    console.log(info.response);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { sendEmail };
