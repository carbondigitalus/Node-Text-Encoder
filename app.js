require('fast-text-encoding');  // just require me before use

const myText = 'Turn me into UTF-8!';

const buffer = new TextEncoder().encode(myText);
// buffer is now a Uint8Array of [84, 117, 114, 110, ...]
