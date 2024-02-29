const express= require ('express');
const bodyParser= require('body-parser');
const call = require('./functions/inboundCalls');
const transcribe=require('./functions/transcribe')

const app = express();

/** middlewares */
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));


app.post('/voice', call);
app.post('/transcribe', transcribe);



// Start the server
app.listen(3333, () => {
  console.log('TwiML Server is running on port 3333');
});