const add = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return new Error("Ingresar solo valores numéricos");
  }
  return a + b;
};

module.exports = add;
