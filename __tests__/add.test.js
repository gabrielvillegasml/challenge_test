const add = require("../src/add");

describe("Funcion add", () => {
  it("Devvelve la suma de a y b", () => {
    const resultAdd = add(2, 3);
    const resultAdd2 = add(10, 5);
    expect(resultAdd).toBe(5);
    expect(resultAdd2).toBe(15);
  });

  it("Devvelve error si no se envían valores numéricos", () => {
    const resultAdd = add("2", 3);
    expect(resultAdd).toBeInstanceOf(Error);
  });
});
