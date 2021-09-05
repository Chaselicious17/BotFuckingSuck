
const axios = require('axios');

function getJokes(message) {
    let jokeData = null;

    axios.get("https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun?blacklistFlags=racist&type=single")
        .then(function (response) {
            // handle success
            jokeData = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            message.reply(jokeData.joke);
        });
}
// Test Comment
module.exports = {
    sendJoke: function (message) {
        getJokes(message);
    }
}