import fs from 'fs';

const copy = async () => {
  fs.readdir('./src/fs/files', (err, files) => {
    if (err?.code === 'ENOENT') {
      throw 'FS operation has failed';
    }
    fs.access('./src/fs/copy-files', (err) => {
      if (!err) {
        throw 'FS operation failed';
      }
      fs.mkdir('./src/fs/copy-files', (err) => {
        files.forEach((file) => {
          fs.copyFile(`./src/fs/files/${file}`, `./src/fs/copy-files/${file}`, (err) => {});
        });
      });
    });
  });
};

await copy();
