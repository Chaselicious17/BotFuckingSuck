module.exports = {
    logBotReady: function(botName) {
        var curDate = new Date();
        console.log(`INFO | ${curDate.toLocaleTimeString()} | Logged in as ${botName}!`);
        return;
    },
    logChat: function(message) {
        var msgDate = new Date(message.createdAt);
        console.log(`INFO | ${msgDate.toLocaleTimeString()} | Channel: ${message.channel.name} | ${message.author.username}: ${message.content}`);
        return;
    },
    logInfo: function(message) {
        var curDate = new Date();
        console.log(`INFO | ${curDate.toLocaleTimeString()} | ${message}`);
        return;
    },
    logError: function(error) {
        var curDate = new Date();
        console.log(`ERROR | ${curDate.toLocaleTimeString()} | ${error}`);
        return;
    },
    logDebug: function(message) {
        var curDate = new Date();
        console.log(`DEBUG | ${curDate.toLocaleTimeString()} | ${message}`);
        return;
    }
}