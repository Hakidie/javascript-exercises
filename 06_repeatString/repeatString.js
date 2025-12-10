const repeatString = function(inputString, number) {
    if(number < 0 ) {
        return "ERROR";
    } else {
        let outputString = "";
    
        for(let i = 0; i < number; i++) {
            outputString += inputString;    
        }

        return outputString;
    }
};

// Do not edit below this line
module.exports = repeatString;
