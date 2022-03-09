const nodemailer = require("nodemailer");
const { round, random } = Math;
exports.randomCode = () => {
  return `${round(random() * 9999) + 1000}`;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

exports.transporter = transporter;
