var winston  = require('winston'); 

winston.add(winston.transports.File, { filename: './logs/loginpage.log' });


winston.addColors(winston.transports.Console, {timestamp: true}); 

winston.remove(winston.transports.Console);

module.exports = winston; 