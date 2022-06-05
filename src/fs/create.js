import fs from 'fs';

export const create = async () => {
  if (fs.existsSync('files/fresh.txt')) throw new Error('FS operation failed');
  fs.writeFile('files/fresh.txt', 'I am fresh and young', (err) => {});
};
create();
