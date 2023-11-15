const { OAuth2Client } = require("google-auth-library");

const myOAuth2Client = new OAuth2Client(
  "38529751211-d2tdls2dkji4h0hh0p30o3qto1h0rki7.apps.googleusercontent.com",
  "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"
);

myOAuth2Client.setCredentials({
  refresh_token:
    "1//04K2RLitflWXsCgYIARAAGAQSNwF-L9IruzDCZC_N2k7PDsyWsB4cnxXkublivcdTPl-cakuPoNGNuQnwhZKKKNGJHYe21UZj-FQ",
});

const getAccessTokenGoogle = async () => {
  const myAccessTokenObject = await myOAuth2Client.getAccessToken();
  console.log("myAccessTokenObject",myAccessTokenObject?.token);
  return myAccessTokenObject?.token;
};

module.exports = getAccessTokenGoogle;
