const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  let info = await transporter.sendMail({
    from: '"Anitor Abraham" <anitorabraham@gmail.com>', // sender address
    to,
    subject,
    html,
  });
};

module.exports = sendEmail;
