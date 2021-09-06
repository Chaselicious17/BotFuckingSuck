const Discord = require('discord.js');
const { handleReady, handleChat } = require('./messageHandler.js');

// init bot client
const bot = new Discord.Client();

// local auth token
require('dotenv').config();
const TOKEN = process.env.TOKEN;

// listener events
bot.on('ready', () => { 
    handleReady(bot.user.tag)
});
bot.on('message', (message) => {
    handleChat(message)
});

// login (on start)
bot.login(TOKEN);

//needed for heroku stuff
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);