export const stringToFloat = (value) => {
  const stringValue = value.replace(/[^\d,-]/g, "");
  const floatValue = parseFloat(stringValue.replace(",", "."));

  return floatValue;
};