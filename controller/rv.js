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
  const rv = rvModel({
    nom: req.body.nom,
    date: req.body.date,
    message: req.body.message,
    tel: req.body.tel,
    email: req.body.email,
  });
  try {
    rv.save();

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    const mailData = {
      from: req.body.email, // sender address
      to: process.env.MAIL, // list of receivers
      subject: "PRISE DE RENVEZ-VOUS",
      text: `Nom: ${req.body.nom} \nTel: ${req.body.tel} \nDate: ${req.body.date} \n\n${req.body.message}`,
      //html: "<h1 style='backgroubColor:red'>Hey there! </h1><br> This is our first message sent with Nodemailer<br/>",
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
