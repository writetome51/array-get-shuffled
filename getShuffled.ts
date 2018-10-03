import { getRandomInteger }
	from '@writetome51/get-random-integer-s/getRandomInteger_getRandomIntegers';
import { getCopy } from '@writetome51/array-non-modifying-getters-basic/getCopy';


export function getShuffled(array): any[] {
	let arrayCopy = getCopy(array);
	let shuffled = [], maxRandom = arrayCopy.length - 1;

	while (maxRandom > -1) {
		let randomIndex = getRandomInteger([0, maxRandom]);
		shuffled.push(arrayCopy[randomIndex]);

		arrayCopy[randomIndex] = arrayCopy[maxRandom];
		--maxRandom;
	}
	return shuffled;
}