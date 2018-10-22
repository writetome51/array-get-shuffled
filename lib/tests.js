"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getShuffled_1 = require("./getShuffled");
var arr = [], i = -1;
while (++i < 8) {
    arr.push(i);
}
var shuffledArr = getShuffled_1.getShuffled(arr);
console.log(shuffledArr);
console.log(arr); // original array still the same.
