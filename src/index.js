function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

module.exports = { add, divide };
