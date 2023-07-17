const findTheOldest = function(people) {
    if (people.length === 0) return -1;

    let firstPerson = people[0]
    let oldestPerson =  people.reduce((oldestPersonYet, currPerson) => {
        let currPersonAge = currPerson.yearOfDeath - currPerson.yearOfBirth
        let oldestPersonYetAge = oldestPersonYet.yearOfDeath - oldestPersonYet.yearOfBirth

        console.log(currPerson.name);
        console.log(currPersonAge);
        console.log(oldestPersonYetAge);
        console.log(oldestPersonYet.name);

        if (currPersonAge > oldestPersonYetAge) {
            return currPerson;
        } else {
            return oldestPersonYet;
        }
    }, firstPerson);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
