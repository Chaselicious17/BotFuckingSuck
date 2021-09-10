module.exports = {
    sendRandom: function(message){
        // Get parameter passed by message
        let max = message.content.split(' ', 2)[1] || 100;        
        let maxInt = parseInt(max);

        let random = getRandomInt(1, maxInt);

        // rangeMaxInt must be an Integer and 0 < rangeMaxInt <= 9007199254740991 (Number.MAX_SAFE_INTEGER)
        if(random === undefined){
            message.channel.send(`Error: **${max}** is not a valid number`);
            return;
        }
        
        // Send random integer
        message.channel.send(random);
    },
    getRandomInt: function(min, max){
        let minInt = parseInt(min);
        let maxInt = parseInt(max);
        return getRandomInt(minInt, maxInt);
    }
}

function getRandomInt(min, max){
    // if no max range return
    if(max === undefined || max < 0 || min < 0) return;

    // if no min, default to 1
    if(min === undefined) min = 1;

    //swap if min > max
    if(min > max) [min, max] = [max, min];    

    // if min is 0 then it shifts the max down one, to compensate for this anomoly, add 1 to max
    if(min === 0) max = max + 1;

    // max must be an Integer and 0 < max <= 9007199254740991 (Number.MAX_SAFE_INTEGER)
    if(!Number.isInteger(max) || max <= 0 || max > Number.MAX_SAFE_INTEGER) return;

    // return random function result
    return Math.floor((Math.random() * max) + min);
}