const { logError } = require('../utility/logger.js');
const axios = require('axios');

module.exports = {
    sendDinner: function (message) {
        axios.get('https://foodish-api.herokuapp.com/api')
            .then(function (response) {
                // handle success
                message.reply({
                    files: [response.data.image]
                });
            })
            .catch(function (error) {
                // handle error
                logError(error);
            });
    }
}