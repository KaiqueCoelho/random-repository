const sum = (a, b) => {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("parameters must be numbers");
    }
    return a + b;
  } catch (err) {
    return err.message;
  }
};

const sub = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a - b;
};

module.exports = {};
module.exports.sub = sub;
module.exports.sum = sum;
