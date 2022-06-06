import fs from 'fs';

export const read = async () => {
  if (!fs.existsSync('src/fs/files/fileToRead.txt')) throw new Error('FS operation failed');

  fs.readFile('src/fs/files/fileToRead.txt', 'utf8', (err, data) => console.log(data));
};

read();
