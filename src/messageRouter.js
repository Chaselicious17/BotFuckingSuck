const { logDebug, logInfo, logError } = require('./utility/logger.js');
const { sendJoke } = require("./joke.js");
const { checkHealth } = require("./healthCheck.js");

module.exports = {
    routeChat: function(message){       
        switch (getCommand(message.content)){
            case "joke":
                logDebug(`Command: joke was picked up`);
                sendJoke(message);
                break;
            case "status":
                logDebug(`Command: status was picked up`);
                checkHealth(message);
                break;
            default:
                logInfo(`The provided command is not a recognized command`);
                break;
        }
        return;
    }
}

// Strip the first character and return the command
function getCommand(messageContent){
    return messageContent.split(" ", 1)[0].substring(1);
}