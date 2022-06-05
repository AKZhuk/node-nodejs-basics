import fs from 'fs';

export const list = async () => {
  if (!fs.existsSync('files')) throw new Error('FS operation failed');
  const files = fs.readdirSync('files', { withFileTypes: true });
  files.forEach((file) => console.log(file.name));
};

list();
