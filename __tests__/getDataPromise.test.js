const getDataPromise = require("../src/getDataPromise");
const API = "https://pokeapi.co/api/v2/pokemon/ditto";
const APIFail = "APIfail";

describe("Funcion getData", () => {
  it("Devuelve el pokemon Ditto", () => {
    return getDataPromise(API).then((response) => {
      expect(response.data.name).toBe("ditto");
    });
  });

  it("Devuelve un error al llamar una url inválida", () => {
    expect.assertions(2);
    return getDataPromise(APIFail).catch((error) => {
      expect(error).not.toBeNull();
      expect(error).toBeInstanceOf(Error);
    });
  });
});
