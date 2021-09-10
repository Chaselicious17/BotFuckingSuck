// Needed environment variables:
// TOKEN - The bot token from Discord
// PORT - The port number to listen


require('dotenv').config();
const Discord = require('discord.js');
const { handleReady, handleChat } = require('./messageHandler.js');
const TOKEN = process.env.NODE_ENV === 'production' ? process.env.TOKEN : process.env.TESTBOTTOKEN;

// init bot client
const bot = new Discord.Client();

// listener events
bot.on('ready', () => { 
    handleReady(bot.user.tag);
});
bot.on('message', (message) => {
    handleChat(message);
});

bot.login(TOKEN);

// Need web listener for heroku server to work
var http = require('http');
http.createServer(function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello!</h1>' + 
    '<p>' + 'This website is used to host the discord bot instance: ' + bot.user.tag + '</p>');
  res.end();
}).listen(process.env.PORT || 9000);
