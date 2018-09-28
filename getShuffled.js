"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_notEmpty_1 = require("basic-data-handling/isEmpty_notEmpty");
var getRandomInteger_getRandomIntegers_1 = require("@writetome51/get-random-integer-s/getRandomInteger_getRandomIntegers");
var getAndRemoveItem_1 = require("@writetome51/array-get-and-removers-basic/getAndRemoveItem");
var getCopy_1 = require("@writetome51/array-non-modifying-getters-basic/getCopy");
function getShuffled(array) {
    var arrayCopy = getCopy_1.getCopy(array);
    var newArray = [];
    while (isEmpty_notEmpty_1.notEmpty(arrayCopy)) {
        var randomIndex = getRandomInteger_getRandomIntegers_1.getRandomInteger([0, arrayCopy.length - 1]);
        var randomItem = getAndRemoveItem_1.getAndRemoveItem(randomIndex, arrayCopy);
        newArray.push(randomItem);
    }
    return newArray;
}
exports.getShuffled = getShuffled;
