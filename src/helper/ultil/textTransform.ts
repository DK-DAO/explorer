export const camelCaseToPascalCase = (text: string) => {
  const newText = text.replace(/([A-Z])/g, ' $1');
  return newText.charAt(0).toUpperCase() + newText.slice(1);
};

export const underscoreToCapitalizeWithSpace = (text: string) => {
  return text.replace(/(?:_| |\b)(\w)/g, (s) => {
    return s.toUpperCase().replace('_', ' ');
  });
};

export const underscoreToCamelCase = (text: string) => {
  return text.replace(/_([a-z])/g, (s) => {
    return s[1].toUpperCase();
  });
};
