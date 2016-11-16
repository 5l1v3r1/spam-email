var pck = require('./troll.json');
var send = require('gmail-send')({
  user: pck.user,               // Your GMail account used to send emails 
  pass: pck.pass,             // Application-specific password 
  to:   '"josue" <jpalmerotc1994@gmail.com>',      // Send back to yourself 
  // from:   '"User" <user@gmail.com>'  // from: by default equals to user 
  // replyTo:'user@gmail.com'           // replyTo: by default undefined 
  subject: 'Mi Amante [URGENT]',
  text:    'give me sex please, I need it'
  // html:    '<b>html text text</b>' 
})();
		