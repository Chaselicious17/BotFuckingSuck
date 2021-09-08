module.exports = {
    getRandom: function(message, roll){
        if (!roll){
            roll = '100';
        }
        
        let rollNum = parseInt(roll);
        if(!Number.isInteger(rollNum)){
            message.channel.send(`Error: ${roll} is not a valid number`);
            return;
        }

        let random = Math.floor((Math.random() * rollNum) + 1);
        if(!Number.isInteger(random)){
            message.channel.send(`Error generating random number: ${random}`);
            return;
        }

        message.channel.send(random);
    }
}