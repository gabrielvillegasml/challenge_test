const axios = require("axios");
const getDataAsyncAwait = async (url) => {
  try {
    return await axios.get(url);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = getDataAsyncAwait;
