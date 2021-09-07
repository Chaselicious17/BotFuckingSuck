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
    // Overall, Attack, Defence, Strength, Hitpoints, Ranged, Prayer, Magic, Cooking, Woodcutting, Fletching, Fishing, Firemaking, Crafting, Smithing, Mining, Herblore, Agility, Thieving, Slayer, Farming, Runecrafting, Hunter, Construction, League Points
    // Bounty Hunter - Hunter
    // Bounty Hunter - Rogue
    // Clue Scrolls (all)
    // Clue Scrolls (beginner)
    // Clue Scrolls (easy)
    // Clue Scrolls (medium)
    // Clue Scrolls (hard)
    // Clue Scrolls (elite)
    // Clue Scrolls (master)
    // LMS - Rank
    // Soul Wars Zeal
    // Abyssal Sire
    // Alchemical Hydra
    // Barrows Chests
    // Bryophyta
    // Callisto
    // Cerberus
    // Chambers of Xeric
    // Chambers of Xeric: Challenge Mode
    // Chaos Elemental
    // Chaos Fanatic
    // Commander Zilyana
    // Corporeal Beast
    // Crazy Archaeologist
    // Dagannoth Prime
    // Dagannoth Rex
    // Dagannoth Supreme
    // Deranged Archaeologist
    // General Graardor
    // Giant Mole
    // Grotesque Guardians
    // Hespori
    // Kalphite Queen
    // King Black Dragon
    // Kraken
    // Kree'Arra
    // K'ril Tsutsaroth
    // Mimic
    // Nightmare
    // Obor
    // Sarachnis
    // Scorpia
    // Skotizo
    // Tempoross
    // The Gauntlet
    // The Corrupted Gauntlet
    // Theatre of Blood
    // Theatre of Blood: Hard Mode
    // Thermonuclear Smoke Devil
    // TzKal-Zuk
    // TzTok-Jad
    // Venenatis
    // Vet'ion
    // Vorkath
    // Wintertodt
    // Zalcano
    // Zulrah
    //rank, level, experience
    console.log(hsData.split('\n'));
    return 1;
}