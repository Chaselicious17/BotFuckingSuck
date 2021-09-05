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