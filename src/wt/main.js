import { Worker } from 'worker_threads';
import os from 'os';

let number = 10;
const promises = [];
const numberOfCPU = os.cpus().length;

function runService(num) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./src/wt/worker.js', { workerData: { num } });
    worker.on('message', (data) => {
      resolve({ status: 'resolved', data });
    });
    worker.on('error', () => reject({ status: 'error', data: null }));
  });
}

async function run() {
  let i = 0;
  while (numberOfCPU > i) {
    promises.push(runService(number + i));
    i++;
  }
  Promise.all(promises).then((values) => console.log(values));
}

run().catch((err) => console.error(err));
