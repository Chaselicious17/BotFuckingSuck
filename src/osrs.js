const axios = require('axios');

module.exports = {
    getStats: function(message, username){
        fetchHighscoreData(username);
    }
};

function fetchHighscoreData(username){
    let hsData = null;

    axios.get(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${username.toLowerCase()}`)
        .then(function (response) {
            // handle success
            hsData = response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
            var userHighscores = mapHighscoreData(hsData);
            //console.log(userHighscores);
            //console.log(username);
        });
}

function mapHighscoreData(hsData){
    //Overall, Attack, Defence, Strength, Hitpoints, Ranged, Prayer, Magic, Cooking, Woodcutting, Fletching, Fishing, Firemaking, Crafting, Smithing, Mining, Herblore, Agility, Thieving, Slayer, Farming, Runecrafting, Hunter, Construction
    //rank, level, experience
    console.log(hsData.split('\n'));
    return 1;
}