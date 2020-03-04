exports.handler = async event => {
  const seed = require("seed-random");

  const username = event.path.split("/")[4];

  seed(username, { global: true });

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const referral = getRandomInt(5, 20);
  const interview = getRandomInt(3, referral);
  const placement = getRandomInt(0, interview);

  const data =
    username === "" || username === undefined
      ? {}
      : { username, referral, interview, placement };

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
