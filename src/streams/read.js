import fs from 'fs';
export const read = async () => {
  const readableStream = fs.createReadStream('./src/streams/files/fileToRead.txt', 'utf8');

  readableStream.on('data', (data) => {
    process.stdout.write(data);
  });
};

read();
