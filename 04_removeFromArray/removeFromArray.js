const removeFromArray = function(arr) {
    toRemoveArr = Array.from(arguments).slice(1);
    return arr.filter((ele) => !toRemoveArr.includes(ele));
};

// Do not edit below this line
module.exports = removeFromArray;
