const sumAll = function(num1, num2) {
    // Check if there's negative number, or if there's non numbers
    if ((typeof(num1) != 'number') || (typeof(num2) != 'number') || (num1 < 0) || (num2 < 0)) {
        return 'ERROR'
    }

    let max_num = Math.max(num1, num2);
    let min_num = Math.min(num1, num2);

    // initialize a variable to store result
    let res = 0;
    // loop from num1 to num2 (inclusive), summing while you loop
    for (let i = min_num; i <= max_num; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
