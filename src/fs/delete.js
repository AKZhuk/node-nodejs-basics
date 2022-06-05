import fs from 'fs';
export const remove = async () => {
  if (!fs.existsSync('files/fileToRemove.txt')) throw new Error('FS operation failed');
  fs.rm('files/fileToRemove.txt', (err) => {});
};

remove();
