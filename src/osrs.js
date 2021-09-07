const axios = require('axios');

module.exports = {
    getStats: function (message, username) {
        axios.get(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${username.toLowerCase()}`)
            .then(function (response) {
                let highscoreData = mapHighscoreData(response.data);                
                let reply = '';

                for (i = 0; i < highscoreData.length; i++) {
                    let rankLvlExp = highscoreData[categories[i]];
                    let category = categories[i];
                    reply += `${category}: { rank: ${rankLvlExp.rank}, level: ${rankLvlExp.level}, experience: ${rankLvlExp.experience} }\n`;
                }
                console.log(reply);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
};

function mapHighscoreData(hsData) {

    //rank, level, experience
    hsData = hsData.split('\n');

    let rawStats = new Array(hsData.length);
    for (i = 0; i < hsData.length; i++) {
        rawStats[i] = hsData[i];
    }
    let categoryStats = new Array(rawStats.length);
    for (i = 0; i < rawStats.length; i++) {
        let rankLvlExp = rawStats[i].split(',');

        categoryStats[categories[i]] = {
            rank: rankLvlExp[0],
            level: rankLvlExp[1],
            experience: rankLvlExp[2]
        };
    }

    return categoryStats;
}

const categories =
    ['Overall', 'Attack', 'Defence', 'Strength', 'Hitpoints', 'Ranged', 'Prayer', 'Magic',
        'Cooking', 'Woodcutting', 'Fletching', 'Fishing', 'Firemaking', 'Crafting', 'Smithing',
        'Mining', 'Herblore', 'Agility', 'Thieving', 'Slayer', 'Farming', 'Runecrafting', 'Hunter',
        'Construction', 'League Points', 'Bounty Hunter - Hunter', 'Bounty Hunter - Rogue',
        'Clue Scrolls (all)', 'Clue Scrolls (beginner)', 'Clue Scrolls (easy)', 'Clue Scrolls (medium)',
        'Clue Scrolls (hard)', 'Clue Scrolls (elite)', 'Clue Scrolls (master)', 'LMS - Rank',
        'Soul Wars Zeal', 'Abyssal Sire', 'Alchemical Hydra', 'Barrows Chests', 'Bryophyta',
        'Callisto', 'Cerberus', 'Chambers of Xeric', 'Chambers of Xeric: Challenge Mode',
        'Chaos Elemental', 'Chaos Fanatic', 'Commander Zilyana', 'Corporeal Beast',
        'Crazy Archaeologist', 'Dagannoth Prime', 'Dagannoth Rex', 'Dagannoth Supreme',
        'Deranged Archaeologist', 'General Graardor', 'Giant Mole', 'Grotesque Guardians',
        'Hespori', 'Kalphite Queen', 'King Black Dragon', 'Kraken', 'Kree\'Arra',
        'K\'ril Tsutsaroth', 'Mimic', 'Nightmare', 'Obor', 'Sarachnis', 'Scorpia', 'Skotizo',
        'Tempoross', 'The Gauntlet', ' The Corrupted Gauntlet', 'Theatre of Blood',
        'Theatre of Blood: Hard Mode', 'Thermonuclear Smoke Devil', 'TzKal-Zuk',
        'TzTok-Jad', 'Venenatis', 'Vet\'ion', 'Vorkath', 'Wintertodt', 'Zalcano', 'Zulrah'];
