module.exports = {
    sendHealthCheck: function (message){
        message.channel.send('I am currently running');
    }
}