import { getRandomInteger } from '@writetome51/get-random-integer-s';
import { getArrayCopy } from '@writetome51/get-array-copy';


export function getShuffled(array): any[] {
	let arrayCopy = getArrayCopy(array);
	let shuffled = [], maxRandom = arrayCopy.length - 1;

	while (maxRandom > -1) {
		let randomIndex = getRandomInteger([0, maxRandom]);
		shuffled.push(arrayCopy[randomIndex]);

		arrayCopy[randomIndex] = arrayCopy[maxRandom];
		--maxRandom;
	}
	return shuffled;
}
