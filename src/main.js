// Needed environment variables:
// TOKEN - The bot token
// TESTBOTTOKEN - The test-bot token
// PORT - The port number to listen

const Discord = require('discord.js');
const express = require('express');
const path = require('path');
const { handleReady, handleChat } = require('./messageHandler.js');

// load config values
require('dotenv').config();
const TOKEN = process.env.NODE_ENV !== 'production' ? process.env.TESTBOTTOKEN : process.env.TOKEN;
const PORT = process.env.PORT || 9000;

// init bot client
const bot = new Discord.Client();

// listener events
bot.on('ready', () => { 
  handleReady(bot.user.tag);
  bot.user.setActivity(" !help", {
    type: "LISTENING",
    url: "https://bot-guy.herokuapp.com/"
  });
});
bot.on('message', (message) => {
  handleChat(message);
});


bot.login(TOKEN);

// Setup web listener
const app = express();

// Favicon
app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'favicon.ico'));
});

// Landing Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// Web Listener
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});