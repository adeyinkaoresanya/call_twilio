const VoiceResponse = require('twilio').twiml.VoiceResponse;

const call= async (req, res) => {

// Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();
  twiml.say("Hello, I'm hearing impaired. Please speak clearly and slowly, or send a text message");
  
  twiml.record({
    transcribe: true,
    transcribeCallback: '/transcribe',  
  });

  twiml.hangup(),

  // Render the response as XML in reply to the webhook request
  res.type('text/xml');
  res.send(twiml.toString());


}

module.exports= call