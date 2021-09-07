const { logError } = require('./utility/logger.js');
const axios = require('axios');

function getFoodPic(message) {
    let responseData = null;

    axios.get('https://foodish-api.herokuapp.com/api')
        .then(function (response) {
            // handle success
            responseData = response.data;
        })
        .catch(function (error) {
            // handle error
            logError(error);
        })
        .then(function () {
            // always executed
            message.reply({
                files: [responseData.image]
            });
        });
}

module.exports = {
    getDinner: function (message) {
        getFoodPic(message);
    }
}