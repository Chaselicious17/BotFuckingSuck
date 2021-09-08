const axios = require('axios');
const { logError } = require('../utility/logger.js');

module.exports = {
    sendJoke: function (message) {
        axios.get('https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=racist&type=single')
            .then(function (response) {
                // handle success
                message.reply(response.data.joke);
            })
            .catch(function (error) {
                // handle error
                logError(error);
            });
    }
}