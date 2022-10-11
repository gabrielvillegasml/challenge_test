const binaryToDecimal = require("../src/binaryToDecimal");

describe("Funcion binaryToDecimal", () => {
  it("Devuelve el número binario correspondiente", () => {
    const resultDecimal = binaryToDecimal("101");
    expect(resultDecimal).toBe(5);
  });

  it("Devuelve un error si no se ingresa un string", () => {
    const resultDecimal = binaryToDecimal(101);
    expect(resultDecimal).toBeInstanceOf(Error);
  });
});
