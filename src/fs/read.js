import fs from 'fs';

export const read = async () => {
  if (!fs.existsSync('files/fileToRead.txt')) throw new Error('FS operation failed');

  fs.readFile('files/fileToRead.txt', 'utf8', (err, data) => console.log(data));
};

read();
