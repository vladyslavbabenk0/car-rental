export const splitConditions = (string, part) => {
  const parts = string.split('\n');
  return parts[part];
};

export const divideAge = (string, part) => {
  const parts = splitConditions(string, 0);
  const result = parts.split(': ');
  return result[part];
};
