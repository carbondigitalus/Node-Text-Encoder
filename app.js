// Core Modules
const fs = require('fs');

// NPM Modules
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

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write file 😢');
      resolve('success');
    });
  });
};

const writeTextFile = async () => {
  try {
    await writeFilePro('results.txt', updatedString);
    console.log('encoded text written to document');
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

(async () => {
  try {
    const x = await writeTextFile();
    console.log(x);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
})();
