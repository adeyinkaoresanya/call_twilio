const twilio = require('twilio')
const dotenv= require('dotenv');

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Set up Twilio client
const twilioClient = twilio(accountSid, authToken);


module.exports= twilioClient;