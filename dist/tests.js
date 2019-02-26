"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arr = [], i = -1;
while (++i < 8) {
    arr.push(i);
}
var shuffledArr = index_1.getShuffled(arr);
console.log(shuffledArr);
console.log(arr); // original array still the same.
