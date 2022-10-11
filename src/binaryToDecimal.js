const binaryToDecimal = (number) => {
  if (typeof number !== "string") {
    return new Error("Se debe ingresar valores tipo string");
  }
  var array = number.split("");
  var number = 0;
  for (var i = 0; i < array.length; i++) {
    number = number + parseInt(array[i]) * Math.pow(2, array.length - 1 - i);
  }
  return number;
};

module.exports = binaryToDecimal;
