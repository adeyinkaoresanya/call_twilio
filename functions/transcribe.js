const sendTextMessage= require('./sendTextMessage')
const dotenv = require("dotenv")
dotenv.config()

const TWILIO_WHATSAPP_NUMBER = process.env.TWILIO_WHATSAPP_NUMBER;
const YOUR_LOCAL_NUMBER= process.env.YOUR_LOCAL_NUMBER;

const transcribe= async (req, res) => {
  
  const text = req.body.TranscriptionText;
  
  // Send the transcribed text to the user's WhatsApp number
  sendTextMessage(text, TWILIO_WHATSAPP_NUMBER, YOUR_LOCAL_NUMBER);
}

module.exports= transcribe;