var fetch = require('node-fetch');
var handler = require('../handler');

// turn over default
const URL = 'https://api.bnm.gov.my/public/fx-turn-over/'

// turn over by date yyyy-mm-dd
function fxTurnOverByDate(date){

    var path = URL+'date/'+date;
    // console.log('2: '+path);

    return handler(path);

}

module.exports = fxTurnOverByDate;