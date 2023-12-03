export const extractCity = (address) => {
  const parts = address.split(', ');
  const city = parts[1];
  return city;
};
