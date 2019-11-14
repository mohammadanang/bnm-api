'use-strict';

module.exports = {

    // api
    handler: require('./lib/api/handler'),
    baseRate: require('./lib/api/baseRate'),
    
    fxTurnOver: require('./lib/api/fxTurnOver/fxTurnOver'),
    fxTurnOverByDate: require('./lib/api/fxTurnOver/fxTurnOverByDate'),
    fxTurnOverByYearMonth: require('./lib/api/fxTurnOver/fxTurnOverByYearMonth'),
    
    exchangeRate: require('./lib/api/exchangeRate/exchangeRate'),
    exchangeRateCurrency: require('./lib/api/exchangeRate/exchangeRateCurrency'),
    exchangeRateByDate: require('./lib/api/exchangeRate/exchangeRateByDate'),
    xchgByYearMonth: require('./lib/api/exchangeRate/xchgByYearMonth'),
    
    consumerAlert: require('./lib/api/consumerAlert/consumerAlert'),
    itbSwap: require('./lib/api/interSwap/itbSwap')

}
