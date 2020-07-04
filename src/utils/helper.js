export const convertCurrency = (value) => {
  if (value === null || value === undefined) {
    return 0;
  }

  value = String(value);
  let digits = value.match(/\d/g) || ["0"];
  const decimalpos = digits.length;

  for (let x = decimalpos - 3; x > 0; x = x - 3) {
    digits.splice(x, 0, ",");
  }
  digits.unshift("$");
  return digits.join("").trim();
};
