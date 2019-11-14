// turn over default

var handler = require('../handler');

const URL = 'https://api.bnm.gov.my/public/fx-turn-over/'
// turn over by month and year
function fxTurnOverByYearMonth(year, month){

    var path = URL+'year/'+year+'/month/'+month;
    // console.log('3: '+path);

    return handler(path);

}

module.exports = fxTurnOverByYearMonth;