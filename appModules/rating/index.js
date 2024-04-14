const config = require("./config");
const createRating = require("./calculations");
const MakeRatingFile = require("./rating-file");
const updateRating = require("./calculations");
module.exports = {
  config,
  MakeRatingFile,
  updateRating,
  createRating,
};
