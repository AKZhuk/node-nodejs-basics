
import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream';

const decompress = async () => {
  const gzip = zlib.createUnzip();

  const out = fs.createReadStream('src/zip/files/archive.gz');
  const inp = fs.createWriteStream('src/zip/files/fileToCompress.txt');

  pipeline(inp, gzip, out, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

decompress();