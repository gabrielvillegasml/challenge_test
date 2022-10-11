const axios = require("axios");
const getDataPromise = (url) => {
  return axios
    .get(url)
    .then((response) => response)
    .catch((error) => {
      throw new Error(error);
    });
};

module.exports = getDataPromise;
