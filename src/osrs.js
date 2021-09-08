const axios = require('axios');

module.exports = {
    getStats: function (message, username) {
        if (!username) return;

        axios.get(`https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${username.toLowerCase()}`)
            .then(function (response) {
                let highscoreData = mapHighscoreData(response.data);

                let reply = '>>> ';
                reply += `Showing stats for: **${username}**\n`;
                reply += `<:Attack_icon:884978564875817030> ${highscoreData.Attack.level}         <:Hitpoints_icon:884978564905177148> ${highscoreData.Hitpoints.level}         <:Mining_icon:884978564888412160> ${highscoreData.Mining.level}\n`;                
                reply += `<:Strength_icon:884978564603211817> ${highscoreData.Strength.level}         <:Agility_icon:884978564615782491> ${highscoreData.Agility.level}         <:Smithing_icon:884978564884230164> ${highscoreData.Smithing.level}\n`;
                reply += `<:Defence_icon:884978564745793558> ${highscoreData.Defence.level}         <:Herblore_icon:884978564737413121> ${highscoreData.Herblore.level}         <:Fishing_icon:884978564909383721> ${highscoreData.Fishing.level}\n`;
                reply += `<:Ranged_icon:884978564884205648> ${highscoreData.Ranged.level}         <:Thieving_icon:884978564607397970> ${highscoreData.Thieving.level}         <:Cooking_icon:884978564880035850> ${highscoreData.Cooking.level}\n`;
                reply += `<:Prayer_icon:884978564930342962> ${highscoreData.Prayer.level}         <:Crafting_icon:884978564942938142> ${highscoreData.Crafting.level}        <:Firemaking_icon:884978564951318559> ${highscoreData.Firemaking.level}\n`;
                reply += `<:Magic_icon:884978564573831209> ${highscoreData.Magic.level}         <:Fletching_icon:884978564594819113> ${highscoreData.Fletching.level}         <:Woodcutting_icon:884978565001658408> ${highscoreData.Woodcutting.level}\n`;
                reply += `<:Runecraft_icon:884978564892614716> ${highscoreData.Runecrafting.level}         <:Slayer_icon:884978564909371392> ${highscoreData.Slayer.level}         <:Farming_icon:884978565010059335> ${highscoreData.Farming.level}\n`;
                reply += `<:Construction_icon:884978564968108072> ${highscoreData.Construction.level}         <:Hunter_icon:884978564993265684> ${highscoreData.Hunter.level}       Total: ${highscoreData.Overall.level}\n`;
                reply += '';//<:Quest_point_icon:884978564515123263>               

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
            level: padLeft(rankLvlExp[1]),
            experience: rankLvlExp[2]
        };
    }

    return categoryStats;
}

function padLeft(num){
    if (num <= 9){
        return '0' + num;
    }
    return num;
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
