import fs from 'fs';

export const list = async () => {
  if (!fs.existsSync('src/fs/files')) throw new Error('FS operation failed');
  const files = fs.readdirSync('src/fs/files', { withFileTypes: true });
  files.forEach((file) => console.log(file.name));
};

list();
