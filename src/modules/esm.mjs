import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  import('./files/a.json', { assert: { type: 'json' } }).then((res) => {
    unknownObject = res;
  });
} else {
  import('./files/b.json', { assert: { type: 'json' } }).then((res) => {
    unknownObject = res;
  });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);

console.log(`Path segment separator is "${path.sep}"`);
console.log(import.meta.url);
console.log(path.basename(import.meta.url));

export const createMyServer = createServer((_, res) => {
  res.end('Request accepted');
});
