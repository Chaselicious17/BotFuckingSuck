const { sendJoke } = require('../services/jokeService.js');
const { sendHealthCheck } = require('../services/healthCheckService.js');
const { sendDinner } = require('../services/foodPicService.js');
const { sendStats } = require('../services/osrsService.js');
const { sendRandom } = require('../services/rngService.js');
const { sendHelp } = require('../services/helpService.js');

module.exports = {
    'status': function (message) { sendHealthCheck(message) },
    'joke': function (message) { sendJoke(message) },
    'food': function (message) { sendDinner(message) },
    'osrs': function (message) { sendStats(message) },
    'roll': function (message) { sendRandom(message) },
    'help': function (message) { sendHelp(message) }
};