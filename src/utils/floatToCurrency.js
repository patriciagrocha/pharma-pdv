export const floatToCurrency = (floatValue) => {
  const convertedValue = floatValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return convertedValue;
};