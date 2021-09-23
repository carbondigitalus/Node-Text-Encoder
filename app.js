require('fast-text-encoding');

const myText = 'hello@carbondigital.us';

const buffer = new TextEncoder().encode(myText);
// buffer is now a Uint8Array of [84, 117, 114, 110, ...]

console.log(buffer);
