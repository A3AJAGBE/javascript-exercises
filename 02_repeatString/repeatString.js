const repeatString = function(word, numOfTimes) {
    let result = "";
    if (numOfTimes < 0) {
        return "ERROR";
    } else {
        for (let i=1; i <= numOfTimes; i++) {
        result+=word
        
    }
    return result;
    }
};



// Do not edit below this line
module.exports = repeatString;
