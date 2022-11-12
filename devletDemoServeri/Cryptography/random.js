const seedrandom = require('seedrandom');

const generateRandomNumbers = (seed, count) => {
    let array = [];

    for (let i = 0; i < count; i++) {
        const generator = seedrandom(seed + i);
        const randomNumber = generator();
        array.push(randomNumber);
    }

    return array;
}

module.exports = {generateRandomNumbers};