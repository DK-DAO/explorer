const camelCaseToPascalCase = (text: string) => {
  const newText = text.replace(/([A-Z])/g, ' $1');
  return newText.charAt(0).toUpperCase() + newText.slice(1);
};

export default camelCaseToPascalCase;
