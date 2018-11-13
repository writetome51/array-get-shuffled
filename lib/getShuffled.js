"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_random_integer_s_1 = require("@writetome51/get-random-integer-s");
var array_get_copy_1 = require("@writetome51/array-get-copy");
function getShuffled(array) {
    var arrayCopy = array_get_copy_1.getCopy(array);
    var shuffled = [], maxRandom = arrayCopy.length - 1;
    while (maxRandom > -1) {
        var randomIndex = get_random_integer_s_1.getRandomInteger([0, maxRandom]);
        shuffled.push(arrayCopy[randomIndex]);
        arrayCopy[randomIndex] = arrayCopy[maxRandom];
        --maxRandom;
    }
    return shuffled;
}
exports.getShuffled = getShuffled;
