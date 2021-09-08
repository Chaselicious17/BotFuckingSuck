module.exports = {
    sendHelp: function(message){
        let reply = '```Commands: \n';
        reply += '    !status - checks whether or not I am running\n';
        reply += '    !joke - gets a random joke from https://v2.jokeapi.dev\n';
        reply += '    !food - gets a picture of food from https://foodish-api.herokuapp.com\n';
        reply += '    !osrsstats {character name} - fetches osrs character levels from osrs highscores\n';
        reply += '    !roll {number} - Rolls a number between 1 and {number}\n';
        reply += '    !help - shows this list of commands\n';
        reply += '```';
        reply += '\nOpen source project for this bot can be found at: https://github.com/Chaselicious17/BotGuy';
        
        message.reply(reply);
    }
};