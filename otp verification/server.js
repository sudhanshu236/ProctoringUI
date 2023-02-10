// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/send-otp", (req, res) => {
  const otp = Math.floor(Math.random() * 100000 + 10000);
  const email = req.body.email;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "YOUR_EMAIL_ADDRESS",
      pass: "YOUR_EMAIL_PASSWORD",
    },
  });

  const mailOptions = {
    from: "YOUR_EMAIL_ADDRESS",
    to: email,
    subject: "OTP Verification",
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.status(200).send({ email, otp });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
