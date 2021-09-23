require('fast-text-encoding');

const baseText = 'hello@carbondigital.us';

// buffer is now a Uint8Array of [84, 117, 114, 110, ...]
const buffer = new TextEncoder().encode(baseText);


console.log(buffer);
