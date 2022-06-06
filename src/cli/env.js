process.env.RSS_name1 = 'value1';
process.env.RSS_name2 = 'value2';
process.env.RSS_name3 = 'value3';

export const parseEnv = () => {
  const variables = Object.entries(process.env).filter((envName) => envName[0].startsWith('RSS'));
  variables.forEach((variable) => console.log(`${variable[0]}=${variable[1]}`));
};

parseEnv();
