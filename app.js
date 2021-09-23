require('fast-text-encoding');

const myText = 'hello@carbondigital.us';

// buffer is now a Uint8Array of [84, 117, 114, 110, ...]
const buffer = new TextEncoder().encode(myText);


console.log(buffer);
