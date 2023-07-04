const reverseString = function(string) {
    let res = '';
    for (let i = string.length - 1; i >= 0; i--) {
        res = res + string[i];
    }

    return res;
};

// Do not edit below this line
module.exports = reverseString;
