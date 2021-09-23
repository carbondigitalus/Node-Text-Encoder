require('fast-text-encoding');

const baseText = 'hello@carbondigital.us';

// buffer is now a Uint8Array of [84, 117, 114, 110, ...]
const buffer = new TextEncoder().encode(baseText);

let encodedArray = [];

const updatedArray = buffer.map((item) => {
  updatedItem = '&#'+ item + ';';
  encodedArray.push(updatedItem);
});

let updatedString = '';

const stringifyArray = encodedArray.forEach((item, i) => {
  updatedString += item;
});
;

console.log(updatedString);
