const reverseString = function(inputString) {
    let outputString = "";
    let stringLength = inputString.length - 1;

    for(let i = stringLength; i >= 0; i--) {
        outputString += inputString.at(i);
    }

    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
