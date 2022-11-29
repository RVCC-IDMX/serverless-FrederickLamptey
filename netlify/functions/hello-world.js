const chalk = require('chalk');
const { DateTime } = require('luxon');

exports.handler = async function () {
  const data = DateTime.now();
  console.log(chalk.green(`${data}: Hello from Netlify functions!`));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world!',
    }),
  };
};
