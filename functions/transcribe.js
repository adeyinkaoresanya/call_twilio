const sendTextMessage= require('./sendTextMessage')
const transcribe= async (req, res) => {

  const text = req.body.TranscriptionText;
  // Send the transcribed text to the user's WhatsApp number
  sendTextMessage(sendTextMessage(text, USER_WHATSAPP_NUMBER));
}

module.exports= transcribe;