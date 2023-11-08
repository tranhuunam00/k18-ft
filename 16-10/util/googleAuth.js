/** @format */

const {OAuth2Client} = require('google-auth-library');

const myOAuth2Client = new OAuth2Client(
   '890393797633-596ka17lnck19vrfm89219imacr206ji.apps.googleusercontent.com', //client id
   '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', // client secret
   'https://developers.google.com/oauthplayground',
);

myOAuth2Client.setCredentials({
   refresh_token:
      '1//04pXdGE97YrqECgYIARAAGAQSNwF-L9IrxpY-HRrLWxPZSKFBqBZLrlYX-QUNmFTV7lowfHWSpf0hH1fvkSnEyXCfJ3fycdr9SEs',
});

const getAccessTokenGoogle = async () => {
   const myAccessTokenObject = await myOAuth2Client.getAccessToken();
   console.log('myAccessTokenObject', myAccessTokenObject?.token);
   return myAccessTokenObject?.token;
};

// getAccessTokenGoogle();
module.exports = getAccessTokenGoogle;
