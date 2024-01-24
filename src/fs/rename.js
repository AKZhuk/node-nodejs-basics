import fs from 'fs';

const checkFiles = () => {
  if (!fs.existsSync('src/fs/files/wrongFilename.txt') || fs.existsSync('src/fs/files/properFilename.md'))
    throw new Error('FS operation failed');
};

const rename = async () => {
  checkFiles();
  fs.rename('src/fs/files/wrongFilename.txt', 'properFilename.md', (err) => {
    if (err) throw new Error('FS operation failed');
  });
};
await rename();