const parseEnv = () => {
  const variables = Object.entries(process.env).filter((envName) => envName[0].startsWith('RSS'));
  variables.forEach((variable) => console.log(`${variable[0]}=${variable[1]}`));
};

parseEnv();
