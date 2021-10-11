const rvModel = require("../models/rv");
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 587, // true for 465, false for other ports
  host: "smtp-relay.sendinblue.com",
  auth: {
    user: process.env.SENDINBLUE_USER,
    pass: process.env.SENDINBLUE_PASSWORD,
  },
  secure: false,
});

const AddRD = async (req, res) => {
  try {
    const rv = new rvModel({
      nom: req.body.nom,
      date: req.body.date,
      message: req.body.message,
      tel: req.body.tel,
      email: req.body.email,
    });
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    const mailData = {
      from: req.boyd.email, // sender address
      to: process.env.MAIL, // list of receivers
      subject: "PRISE DE RENVEZ-VOUS",
      text: `Depuis naimdev.com \n\n Je suis ${name}, \n ${text}`,
      // html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>",
    };
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log("Error sending");
        res.status(500).json(err);
      } else {
        console.log("Sended");
        res.status(200).json("Message envoyé...");
      }
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { AddRD };
