const config = require("./config");
const MakeRatingFile = require("./rating-file");
const { updateRating, createRating } = require("./calculations");
const PATH_TO_RATING_FILE = require("./config");
module.exports = {
  config,
  MakeRatingFile,
  updateRating,
  createRating,
};
