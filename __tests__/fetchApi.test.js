const fetchApi = require("../src/fetchApi");
const API = "https://pokeapi.co/api/v2/pokemon/ditto";
const APIFail = "APIFail";

describe("Funcion getData", () => {
  it("Devuelve el pokemon Ditto", (done) => {
    const callback = (error, data) => {
      expect(data.name).toBe("ditto");
      done();
    };
    fetchApi(API, callback);
  });

  it("Devuelve un error si se envia una url inválida", (done) => {
    expect.assertions(2);
    const callback = (error, data) => {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      done();
    };
    fetchApi(APIFail, callback);
  });
});
