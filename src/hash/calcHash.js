import crypto from 'crypto';
import fs from 'fs';

export const calculateHash = async () => {
  const fileBuffer = fs.readFileSync('src/hash/files/fileToCalculateHashFor.txt');
  return crypto.createHash('sha256').update(fileBuffer).digest('hex');
};
console.log(calculateHash());
