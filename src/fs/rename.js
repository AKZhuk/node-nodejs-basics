import fs from 'fs';

const checkFiles = () => {
  if (!fs.existsSync('files/wrongFilename.txt') || fs.existsSync('files/properFilename.md'))
    throw new Error('FS operation failed');
};

export const rename = async () => {
  checkFiles();
  fs.rename('files/wrongFilename.txt', 'properFilename.md', (err) => {
    if (err) throw new Error('FS operation failed');
  });
};
rename();
