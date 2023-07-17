const fibonacci = function(num) {
    collection = {}
    function helper_fib(num) {
        if (num <= 0) return "OOPS";
        if (num == 1 || num == 2) return 1;

        let previous;
        let previousprev;
        if (!collection[num - 1]) {
            previous = helper_fib(num - 1);
            collection[num - 1] = previous;
        } else {
            previous = collection[num - 1];

        }

        if (!collection[num - 2]) {
            previousprev = helper_fib(num - 2);
            collection[num - 2] = previousprev;
        } else {
            previousprev = collection[num - 2];

        }

        return helper_fib(num - 1) + helper_fib(num - 2);
    }
    return helper_fib(Number.parseInt(num));
};

// Do not edit below this line
module.exports = fibonacci;
