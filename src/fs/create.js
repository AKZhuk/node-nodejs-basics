import fs from 'fs';

const create = async () => {
  if (fs.existsSync('./src/fs/files/fresh.txt')) throw new Error('FS operation failed');
  fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', (err) => {});
};

await create();
