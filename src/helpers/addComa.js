export const addComma = (number) => {
  if (typeof number !== 'number') {
    return;
  }

  const numberAsString = number.toString();
  const length = numberAsString.length;

  if (length <= 3) {
    return numberAsString;
  }

  const firstPart = numberAsString.slice(0, length % 3 || 3);
  const otherParts = [];

  for (let i = length % 3 || 3; i < length; i += 3) {
    otherParts.push(numberAsString.slice(i, i + 3));
  }

  return firstPart + ',' + otherParts.join(',');
};
