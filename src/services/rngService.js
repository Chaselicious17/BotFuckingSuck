module.exports = {
    sendRandom: function(message){
        // Get parameter passed by message
        let rangeMaxStr = message.content.split(' ', 2)[1] || 100;        
        let rangeMaxInt = parseInt(rangeMaxStr);

        // rangeMaxInt must be an Integer and 0 < rangeMaxInt <= 9007199254740991 (Number.MAX_SAFE_INTEGER)
        if(!Number.isInteger(rangeMaxInt) || rangeMaxInt <= 0 || rangeMaxInt > Number.MAX_SAFE_INTEGER){
            message.channel.send(`Error: ${rangeMaxStr} is not a valid number`);
            return;
        }

        // randomize function
        let random = Math.floor((Math.random() * rangeMaxInt) + 1);
        
        // Send random integer
        message.channel.send(random);
    }
}
