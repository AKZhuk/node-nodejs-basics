import fs from 'fs';
export const remove = async () => {
  if (!fs.existsSync('./src/fs/files/fileToRemove.txt')) throw new Error('FS operation failed');
  fs.rm('./src/fs/files/fileToRemove.txt', (err) => {});
};

remove();
