// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC5dfdc0853cb29c258665c28c06ec7114';
const authToken = 'f7ab92d05c9327a99d3854d0d253a63c';
const client = require('twilio')(accountSid, authToken);
const express = require('express');
const router = express.Router();




router.get('/sms',(req,res)=>{
    console.log('reasdasdass')
    client.messages
      .create({
         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
         from: '+16614656983',
         to: '+3530830157593'
       })
      .then(message => {
        res.json(message)
        console.log(message.sid)});
      

})

module.exports = router