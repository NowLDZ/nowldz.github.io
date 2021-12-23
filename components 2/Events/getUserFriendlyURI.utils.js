export const getUserFriendlyURI = name => {
  const removedSlash = name.toLowerCase().replace(/\//g, '_');
  const removedBrackets = removedSlash.replace(/[\[\]]/g, '');
  const removedSpaces = removedBrackets.replace(/\s/g, '_');
  return removedSpaces;
};
