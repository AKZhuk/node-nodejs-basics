import fs from 'fs';

const write = async () => {
  const filePath = '/src/streams/files/fileToWrite.txt';

  const writer = fs.createWriteStream(filePath, 'utf8');

  process.stdin.pipe(writer);
};

await write();