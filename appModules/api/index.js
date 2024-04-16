const { getData } = require("./api-utils");
const { getRandomGame } = require("./api-utils");
const endpoints = require("./config");
module.exports = {
  getData,
  endpoints,
  getRandomGame,
};
