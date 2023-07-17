const palindromes = function (phrase) {
    let letters = Array.from(phrase.toLowerCase()).filter(char => char.match(/[a-z0-9]/i))
    let lettersLength = letters.length
    if (lettersLength === 0) return false;
    let firstHalf = letters.slice(0, Math.floor(lettersLength/2));
    let secondHalf;
    if (lettersLength % 2 == 0) {
        secondHalf = letters.slice(Math.floor(lettersLength/2)).reverse();
    } else {
        secondHalf = letters.slice(Math.floor(lettersLength/2) + 1).reverse();
    }
    console.log(firstHalf)
    console.log(secondHalf)

    return firstHalf.every((ele, index) => ele == secondHalf[index]);
};

// Do not edit below this line
module.exports = palindromes;
