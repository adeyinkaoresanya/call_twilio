const twilioClient = require('../config');

const sendTextMessage = (text, TWILIO_WHATSAPP_NUMBER, YOUR_LOCAL_NUMBER ) => {
  twilioClient.messages.create({
    body: text,
    from: 'whatsapp:' + TWILIO_WHATSAPP_NUMBER,
    to: 'whatsapp:' + YOUR_LOCAL_NUMBER,
  });
};


module.exports= sendTextMessage