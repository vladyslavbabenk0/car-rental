export const reverseDollar = (string) => {
  if (typeof string !== 'string') {
    return;
  }

  const dollarIndex = string.indexOf('$');

  if (dollarIndex === -1) {
    return;
  }

  const numberPart = string.slice(1);
  const dollarPart = string.slice(0, 1);

  return `${numberPart}${dollarPart}`;
};
