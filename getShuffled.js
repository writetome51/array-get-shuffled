"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRandomInteger_getRandomIntegers_1 = require("@writetome51/get-random-integer-s/getRandomInteger_getRandomIntegers");
var getCopy_1 = require("@writetome51/array-non-modifying-getters-basic/getCopy");
function getShuffled(array) {
    var arrayCopy = getCopy_1.getCopy(array);
    var shuffled = [], maxRandom = arrayCopy.length - 1;
    while (maxRandom > -1) {
        var randomIndex = getRandomInteger_getRandomIntegers_1.getRandomInteger([0, maxRandom]);
        shuffled.push(arrayCopy[randomIndex]);
        arrayCopy[randomIndex] = arrayCopy[maxRandom];
        --maxRandom;
    }
    return shuffled;
}
exports.getShuffled = getShuffled;
