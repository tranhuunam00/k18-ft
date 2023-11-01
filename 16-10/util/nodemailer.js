

const nodemailer = require("nodemailer");
const getAccessTokenGoogle = require("./googleAuth");
const NodeMailerLib = async ({ to, subject, text, from }, callback) => {
  const accessToken = await getAccessTokenGoogle();
  console.log("accessToken",accessToken);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "23025029@vnu.edu.vn",
      clientId:"38529751211-d2tdls2dkji4h0hh0p30o3qto1h0rki7.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: "1//04K2RLitflWXsCgYIARAAGAQSNwF-L9IruzDCZC_N2k7PDsyWsB4cnxXkublivcdTPl-cakuPoNGNuQnwhZKKKNGJHYe21UZj-FQ",
      accessToken: accessToken,
    },
  });
  const mailOptions = {
    to,
    subject,
    html: `<div>
    <h3>${text}</h3>
    <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"></img>
    </div>`,
    from
  };
  console.log("transporter",transporter);
  await transporter.sendMail(mailOptions, callback);
};
module.exports = NodeMailerLib;

NodeMailerLib(
  {
    to: "tranhuunam23022000@gmail.com",
    subject: "hhiuhi",
    text: "xin chào",
  },
  (err, res) => {
    console.log(err);
    console.log(res);
  }
);
