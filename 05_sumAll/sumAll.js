const sumAll = function(a, n) {
    let totalSum = 0;
    if ((typeof a !== 'number') || (typeof n !== 'number') || (a < 0) || (n < 0)) {
        return "ERROR";
    } else {

        if (a > n) {
            for (let i = a; i >= n; i--) {
                totalSum += i;
            }
        } else {
            for (let i = a; i <= n; i++) {
                totalSum += i;
            }
        }
        return totalSum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;
