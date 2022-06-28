const hs = require('osrs-json-hiscores');
const { hiscores } = require('osrs-gim-hiscores');
const { logInfo } = require('../utility/logger.js');

module.exports = {
    sendStats: function (message){
        let messageTokens = message.content.split(' ');
        let rsn = messageTokens[1];
        let accountType = messageTokens[2];
        if (!rsn) return;

        if (!accountType){
            hs.getStats(rsn)
                .then((res) => message.channel.send(buildMainResponse(res)))
                .catch((err) => message.channel.send(`${err}`));  
        } else if (accountType === 'group' || accountType === 'groupiron' || accountType === 'gim') {
            hiscores.getUserStats(rsn)
                .then((res) => message.channel.send(buildGimResponse(rsn, res)))
                .catch((err) => message.channel.send(`${err}`));
        } else {
            hs.getStatsByGamemode(rsn, accountType)
                .then((res) => message.channel.send(buildIronResponse(rsn, accountType, res.skills)))
                .catch((err) => message.channel.send(`${err}`)); 
        }
    }

};

function buildMainResponse(r){
    return formatResponse(r.name, r.mode, r.main.skills);
}

function buildIronResponse(name, type, skills){
    return formatResponse(name, type, skills);
}

function buildGimResponse(name, skills){
    return formatGimResponse(name, skills);
}

function formatResponse(name, mode, skills){
    let reply = '>>> ';
        reply += `Showing stats for: **${name}**\n`;
        reply += `Account Type: **${mode}**\n`;
        reply += `<:Attack_icon:884978564875817030>  ${skills.attack.level}         <:Hitpoints_icon:884978564905177148>  ${skills.hitpoints.level}         <:Mining_icon:884978564888412160>  ${skills.mining.level}\n\n`;                
        reply += `<:Strength_icon:884978564603211817>  ${skills.strength.level}         <:Agility_icon:884978564615782491>  ${skills.agility.level}         <:Smithing_icon:884978564884230164>  ${skills.smithing.level}\n\n`;
        reply += `<:Defence_icon:884978564745793558>  ${skills.defence.level}         <:Herblore_icon:884978564737413121>  ${skills.herblore.level}         <:Fishing_icon:884978564909383721>  ${skills.fishing.level}\n\n`;
        reply += `<:Ranged_icon:884978564884205648>  ${skills.ranged.level}         <:Thieving_icon:884978564607397970>  ${skills.thieving.level}         <:Cooking_icon:884978564880035850>  ${skills.cooking.level}\n\n`;
        reply += `<:Prayer_icon:884978564930342962>  ${skills.prayer.level}         <:Crafting_icon:884978564942938142>  ${skills.crafting.level}         <:Firemaking_icon:884978564951318559>  ${skills.firemaking.level}\n\n`;
        reply += `<:Magic_icon:884978564573831209>  ${skills.magic.level}         <:Fletching_icon:884978564594819113>  ${skills.fletching.level}         <:Woodcutting_icon:884978565001658408>  ${skills.woodcutting.level}\n\n`;
        reply += `<:Runecraft_icon:884978564892614716>  ${skills.runecraft.level}          <:Slayer_icon:884978564909371392>  ${skills.slayer.level}         <:Farming_icon:884978565010059335>  ${skills.farming.level}\n\n`;
        reply += `<:Construction_icon:884978564968108072>  ${skills.construction.level}         <:Hunter_icon:884978564993265684>  ${skills.hunter.level}       Total:  ${skills.overall.level}\n`;
        reply += '';

    return reply;
}

function formatGimResponse(name, skills){
    let reply = '>>> ';
        reply += `Showing stats for: **${name}**\n`;
        reply += `Account Type: **Group Ironman**\n`;
        reply += `<:Attack_icon:884978564875817030>  ${skills.attack.level}         <:Hitpoints_icon:884978564905177148>  ${skills.hitpoints.level}         <:Mining_icon:884978564888412160>  ${skills.mining.level}\n\n`;                
        reply += `<:Strength_icon:884978564603211817>  ${skills.strength.level}         <:Agility_icon:884978564615782491>  ${skills.agility.level}         <:Smithing_icon:884978564884230164>  ${skills.smithing.level}\n\n`;
        reply += `<:Defence_icon:884978564745793558>  ${skills.defence.level}         <:Herblore_icon:884978564737413121>  ${skills.herblore.level}         <:Fishing_icon:884978564909383721>  ${skills.fishing.level}\n\n`;
        reply += `<:Ranged_icon:884978564884205648>  ${skills.ranged.level}         <:Thieving_icon:884978564607397970>  ${skills.thieving.level}         <:Cooking_icon:884978564880035850>  ${skills.cooking.level}\n\n`;
        reply += `<:Prayer_icon:884978564930342962>  ${skills.prayer.level}         <:Crafting_icon:884978564942938142>  ${skills.crafting.level}         <:Firemaking_icon:884978564951318559>  ${skills.firemaking.level}\n\n`;
        reply += `<:Magic_icon:884978564573831209>  ${skills.magic.level}         <:Fletching_icon:884978564594819113>  ${skills.fletching.level}         <:Woodcutting_icon:884978565001658408>  ${skills.woodcutting.level}\n\n`;
        reply += `<:Runecraft_icon:884978564892614716>  ${skills.runecrafting.level}          <:Slayer_icon:884978564909371392>  ${skills.slayer.level}         <:Farming_icon:884978565010059335>  ${skills.farming.level}\n\n`;
        reply += `<:Construction_icon:884978564968108072>  ${skills.construction.level}         <:Hunter_icon:884978564993265684>  ${skills.hunter.level}       Total:  ${skills.overall.level}\n`;
        reply += '';

    return reply;
}