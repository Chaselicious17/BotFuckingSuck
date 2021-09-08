const { logDebug, logInfo, logError } = require('./utility/logger.js');
const { sendJoke } = require('./joke.js');
const { checkHealth } = require('./healthCheck.js');
const { getDinner } = require('./foodPics.js');
const { getStats } = require('./osrs.js');

module.exports = {
    routeChat: function(message){       
        switch (getCommand(message.content)){
            case 'joke':
                logDebug('Command: joke was picked up');
                sendJoke(message);
                break;
            case 'status':
                logDebug('Command: status was picked up');
                checkHealth(message);
                break;
            case 'dinner':
                logDebug('Command: dinner was picked up');
                getDinner(message);
                break;
            case 'osrsstats':
                logDebug('Command: osrsstats was picked up');
                let username = message.content.split(' ', 2)[1];
                getStats(message, username);
                break;
            default:
                logInfo('The provided command is not a recognized command');
                break;
        }
        return;
    }
}

// Strip the first character and return the command
function getCommand(messageContent){
    return messageContent.split(' ', 1)[0].substring(1).toLowerCase();
}