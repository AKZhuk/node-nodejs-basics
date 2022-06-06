import zlib from 'zlib';
import fs from 'fs';
import { pipeline } from 'stream';
export const compress = async () => {
  const gzip = zlib.createGzip();

  const inp = fs.createReadStream('src/zip/files/fileToCompress.txt');
  const out = fs.createWriteStream('src/zip/files/archive.gz');
  pipeline(inp, gzip, out, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

compress();
