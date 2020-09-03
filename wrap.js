const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  }

  // array of words in line
  const words = line.split(' ');
  // temp variable for each line as it's added
  let newLine = [];
  // properly formatted string
  let wrapped = '';
  let error = false;

  words.forEach(word => {
    if (newLine.join(' ').length + word.length < maxLen) {
      newLine.push(word);
    } else if (word.length > maxLen) {
      error = true;
    } else {
      wrapped = wrapped + (newLine.join(' ') + '\n')
      newLine = [word];
    }
  })

  if (newLine.length > 0) {
    wrapped = wrapped + (newLine.join(' ') + '\n')
  }

  return error ? 'Error!' : wrapped;
}

module.exports = wrap;
