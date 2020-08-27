import {getRandomInteger} from '@writetome51/get-random-integer-s';


export function shuffle(array) {
	let maxRandom = array.length - 1;

	while (maxRandom > 0) {
		let randomIndex = getRandomInteger([0, maxRandom]);
		tradePlaces(randomIndex, maxRandom);
		--maxRandom;
	}


	function tradePlaces(idxA, idxB) {
		let randomItem = array[idxA];

		array[idxA] = array[idxB];
		array[idxB] = randomItem;
	}
}
