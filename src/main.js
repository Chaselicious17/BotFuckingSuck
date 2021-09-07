// Needed environment variables:
// TOKEN - The bot token from Discord
// PORT - The port number to listen


require('dotenv').config();
const Discord = require('discord.js');
const { handleReady, handleChat } = require('./messageHandler.js');

// init bot client
const bot = new Discord.Client();

// listener events
bot.on('ready', () => { 
    handleReady(bot.user.tag);
});
bot.on('message', (message) => {
    handleChat(message);
});

// login (on start)
bot.login(process.env.TOKEN);

// Need web listener for heroku server to work
var http = require('http');
http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(process.env.PORT || 9000);
