import {shuffle} from './index.js';


let arr = [], i = 0;
while (++i <= 8) arr.push(i);
console.time('check');
shuffle(arr);
console.timeEnd('check');
console.log(arr);
