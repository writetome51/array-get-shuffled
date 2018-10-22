import { getShuffled } from './getShuffled';


let arr = [], i = -1;
while (++i < 8) {
	arr.push(i);
}
let shuffledArr = getShuffled(arr);

console.log(shuffledArr);

console.log(arr); // original array still the same.