import {
  NEW_ORDER,
  CANCEL_CLIENT,
  ASSIGNED,
  CANCEL_BUILDER,
  COMPLETED,
} from "./variables";

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

export const getInitials = (name) => {
  return name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");
};

export const getStatusText = (status) => {
  let statusText;
  switch (status) {
    case NEW_ORDER:
      statusText = "New";
      break;
    case CANCEL_CLIENT:
      statusText = "Cancelled by Client";
      break;
    case ASSIGNED:
      statusText = "Assigned";
      break;
    case CANCEL_BUILDER:
      statusText = "Cancelled by Builder";
      break;
    case COMPLETED:
      statusText = "Completed";
      break;
    default:
      statusText = "";
  }
  return statusText;
};
