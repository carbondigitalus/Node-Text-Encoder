require('fast-text-encoding');  // just require me before use

const buffer = new TextEncoder().encode('Turn me into UTF-8!');
// buffer is now a Uint8Array of [84, 117, 114, 110, ...]
