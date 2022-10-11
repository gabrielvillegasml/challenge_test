const getDataAsyncAwait = require("../src/getDataAsyncAwait");
const API = "https://pokeapi.co/api/v2/pokemon/ditto";
const APIFail = "APIFail";

describe("Funcion getData", () => {
  it("Devuelve el pokemon Ditto", async () => {
    const responseGetData = await getDataAsyncAwait(API);
    expect(responseGetData.data.name).toBe("ditto");
  });

  it("Devuelve un error si se envia una url inválida", async () => {
    expect.assertions(2);
    try {
      await getDataAsyncAwait(APIFail);
    } catch (error) {
      expect(error).not.toBeNull();
      expect(error).toBeInstanceOf(Error);
    }
  });
});
