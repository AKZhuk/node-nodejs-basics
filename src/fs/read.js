import fs from 'fs';
const path = 'src/fs/files/fileToRead.txt'

const read = async () => {
  if (!fs.existsSync(path)) throw new Error('FS operation failed');

  fs.readFile(path, 'utf8', (err, data) => console.log(data));
};

await read();

