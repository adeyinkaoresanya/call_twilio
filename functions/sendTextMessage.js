const twilioClient = require('./config');

const sendTextMessage = (text, to) => {
  twilioClient.messages.create({
    body: text,
    from: 'whatsapp:' + TWILIO_WHATSAPP_NUMBER,
    to: 'whatsapp:' + to,
  });
};

sendTextMessage(text, USER_WHATSAPP_NUMBER);

module.exports= sendTextMessage