const nodemailer = require("nodemailer");
const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "lizzie.lubowitz20@ethereal.email",
      pass: "KKngEUTMYHu4BdrwKv",
    },
  });

  let info = await transporter.sendMail({
    from: '"Anitor Abraham" <anitorabraham@gmail.com>', // sender address
    to: "bar@example.com", // list of receivers
    subject: "hello world how is everyone doing", //subject line
    text: "Hello world?", // plain text body
    html: "<h2>Sending emails with node.js</h2>", // html body
  });
};

module.exports = sendEmail;
