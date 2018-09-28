import { notEmpty } from 'basic-data-handling/isEmpty_notEmpty';
import { getRandomInteger } 
	from '@writetome51/get-random-integer-s/getRandomInteger_getRandomIntegers';
import { getAndRemoveItem } from '@writetome51/array-get-and-removers-basic/getAndRemoveItem';
import { getCopy } from '@writetome51/array-non-modifying-getters-basic/getCopy';


export function getShuffled(array): any[] {
	let arrayCopy = getCopy(array);
	let newArray = [];
	while (notEmpty(arrayCopy)) {
		let randomIndex = getRandomInteger([0, arrayCopy.length - 1]);
		let randomItem = getAndRemoveItem(randomIndex, arrayCopy);
		newArray.push(randomItem);
	}
	return newArray;
}