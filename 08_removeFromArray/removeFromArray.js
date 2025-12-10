const removeFromArray = function(inputArray, ...inputValue) {
    const setOfRemovedValues = new Set(inputValue);
    //const outputArray = inputArray.filter(element => element != inputValue1);
    const outputArray = inputArray.filter(element => {
        return !setOfRemovedValues.has(element)
    });
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
