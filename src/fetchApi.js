const axios = require("axios");

const fetchAPI = async (url, callback) => {
  try {
    const responseApi = await axios.get(url);
    callback(null, responseApi.data);
  } catch (error) {
    const newError = new Error("url not found");
    callback(newError, null);
  }
};

module.exports = fetchAPI;
