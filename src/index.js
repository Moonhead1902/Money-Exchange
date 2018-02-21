// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var cash = currency;
    var H = 0;
    var Q = 0;
    var D = 0;
    var N = 0;
    var P = 0;
    var result = {};

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency === 0) {
        return {};
    }

    while (cash != 0) {
        if (cash >= 50) {
            H = Math.floor(cash / 50);
            cash = cash - H * 50;
            result["H"] = H;
        } else if (cash >= 25) {
            Q = Math.floor(cash / 25);
            cash = cash - Q * 25; 
            result["Q"] = Q;
        } else if (cash >= 10) {
            D = Math.floor(cash / 10);
            cash = cash - D * 10;
            result["D"] = D; 
        } else if (cash >= 5) {
            N = Math.floor(cash / 5);
            cash = cash - N * 5; 
            result["N"] = N;
        } else if (cash >= 1) {
            P = Math.floor(cash / 1);
            cash = cash - P; 
            result["P"] = P;
        }
    }
return result;
    
}
