import {getShuffled} from './index.js';


let arr = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}];
let shuffledArr = getShuffled(arr);
console.log(shuffledArr);
console.log(arr); // original array still the same.
