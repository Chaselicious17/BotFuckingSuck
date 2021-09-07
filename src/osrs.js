const axios = require('axios');

module.exports = {
    getStats: function (message, username) {
        axios.get(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${username.toLowerCase()}`)
            .then(function (response) {
                let highscoreData = mapHighscoreData(response.data);

                let reply = '```';
                reply += `Stats for: ${username} <a:200iq:688355903807684625>\n`;
                reply += `Attack: ${highscoreData.Attack.level}       Hitpoints: ${highscoreData.Hitpoints.level}      Mining: ${highscoreData.Mining.level}\n`;                
                reply += `Strength: ${highscoreData.Strength.level}       Agility: ${highscoreData.Agility.level}      Smithing: ${highscoreData.Smithing.level}\n`;
                reply += `Defence: ${highscoreData.Defence.level}       Herblore: ${highscoreData.Herblore.level}      Fishing: ${highscoreData.Fishing.level}\n`;
                reply += `Ranged: ${highscoreData.Ranged.level}       Thieving: ${highscoreData.Thieving.level}      Cooking: ${highscoreData.Cooking.level}\n`;
                reply += `Prayer: ${highscoreData.Prayer.level}       Crafting: ${highscoreData.Crafting.level}      Firemaking: ${highscoreData.Firemaking.level}\n`;
                reply += `Magic: ${highscoreData.Magic.level}       Fletching: ${highscoreData.Fletching.level}      Woodcutting: ${highscoreData.Woodcutting.level}\n`;
                reply += `Runecrafting: ${highscoreData.Runecrafting.level}       Slayer: ${highscoreData.Slayer.level}      Farming: ${highscoreData.Farming.level}\n`;
                reply += `Construction: ${highscoreData.Construction.level}       Hunter: ${highscoreData.Hunter.level}      Total: ${highscoreData.Overall.level}\n`;
                reply += '```';

                message.channel.send(reply);
            })
            .catch(function (error){
                // handle error
                message.channel.send(`User: ${username} not found`);
            });
    }
};

function mapHighscoreData(hsData){

    hsData = hsData.split('\n');

    let categoryStats = new Array(hsData.length);
    for (i = 0; i < hsData.length; i++) {
        let rankLvlExp = hsData[i].split(',');

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
