const { logBotReady, logChat } = require('./utility/logger.js');
const constants = require('./utility/constants.js');
const services = require('./utility/commandServices.js');

module.exports = {
    handleReady: function(botName){
        logBotReady(botName);
        return;
    },
    handleChat: function(message){
        // dont handle bot messages
        if(message.author.bot) return;

        if(message.author.id === 189955666356600832){ // panker
            message.reply(`**Oh My Suck!** Sorry, but you sing to much for my functions to work properly. Try not singing for the betterment of the rest of us.`);
            return;
        }

        if(message.author.id === 162382220785483776 || message.author.id === 794708380320006226){ // preston (big cock)
            message.reply(`**Oh My Suck!** Sorry, but you sing to much for my functions to work properly. Try not singing for the betterment of the rest of us.`);
            return;
        }
        
        if(message.author.id === 353698469682216961){ // grog
            message.reply(`Wanna play Valorant??? <:grog:871892393312530512><:grog:871892393312530512><:grog:871892393312530512>`);
            return;
        }
        
        logChat(message);
        
        // return if message isn't a command
        if (!hasCommandToken(message.content)) return;
        
        let command = message.content
            .split(' ', 1)[0] // get first string from command token until first space
            .substring(1)     // trim the command token from the front to get just the command
            .toLowerCase();   // set to lowercase to avoid case sensitive issues

        // check if command is in list of services
        if (command in services){
            // runs command service
            services[command](message);
        }
        else {
            message.reply(`**Oh My Suck!** Sorry, but **${command}** is not a command. Try !help for a list of commands`);
        }
    }
}

// Check if the message contains the bot command character
function hasCommandToken(messageContent){
    try{
        // If first character is the bot command character
        if (messageContent.charAt(0) === constants["CommandToken"])
            return true;
    }
    catch (exception){
        logError(exception.message);
        return false;    
    }

    return false;
}