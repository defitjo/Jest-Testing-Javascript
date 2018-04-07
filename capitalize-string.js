function capitalize(string) {
  const capital = string[0].toUpperCase();
  const word = string.slice(1);
  return capital + word;
}

module.exports = capitalize;