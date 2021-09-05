const { logBotReady, logChat } = require("./utility/logger.js");
const { routeChat } = require("./messageRouter.js");
const constants = require('./utility/constants.js');

module.exports = {
    handleReady: function(botName){
        logBotReady(botName);
        return;
    },
    handleChat: function(message){
        if(message.author.bot) return;

        logChat(message);
        
        if (!hasActivationToken(message.content)) {
            return;
        } 

        routeChat(message);
    }
}

// Check if the message contains the bot command character
function hasActivationToken(messageContent){
    try 
    {
        // If first character is the bot command character
        if (messageContent.charAt(0) === constants["ActivationToken"]) {
            return true;
        }
    } 
    catch (exception) 
    {
        logError(exception.message);
        return false;    
    }

    return false;
}