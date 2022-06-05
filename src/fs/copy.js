import fs from 'fs';

export const copy = async () => {
  if (fs.existsSync('files/fileToRemove.txt')) throw new Error('FS operation failed');
  fs.copy('files', 'files_copy', (err) => {});
};
