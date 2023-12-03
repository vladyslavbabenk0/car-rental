export const extractCountry = (address) => {
  const parts = address.split(', ');
  const country = parts[2];
  return country;
};
