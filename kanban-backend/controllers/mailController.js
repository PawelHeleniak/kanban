const { sendEmail } = require("../mail");

const sendTestEmail = async (req, res) => {
  const receipients = "pawel.heleniak@outlook.com";
  const subject = "Testowa wiadomość";
  const message = "Lorem";

  await sendEmail(receipients, subject, message);
};
module.exports = {
  sendTestEmail,
};
