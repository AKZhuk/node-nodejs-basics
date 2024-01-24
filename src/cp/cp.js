import child_process from 'child_process';

const spawnChildProcess = async (args) => {
  const child = child_process.fork('./src/cp/files/script.js', args);

  child.on('message', (data) => {
    process.stdout.write(data);
  });

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

spawnChildProcess([1, 2, 3]);
