import {getArrayCopy} from '@writetome51/get-array-copy';
import {getArrFilled} from '@writetome51/get-arr-filled';
import {getRandomInteger} from '@writetome51/get-random-integer-s';


export function getShuffled(array) {
	let arr = getArrayCopy(array);
	let length = arr.length, maxRandom = length - 1;

	return getArrFilled(length, () => {
		let randomIndex = getRandomInteger([0, maxRandom]);
		let result = arr[randomIndex];

		arr[randomIndex] = arr[maxRandom];
		--maxRandom;
		return result;
	});
}
