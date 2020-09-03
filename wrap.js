const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  }
  const indexOfBlank = line.lastIndexOf(' ', maxLen);
  let split;
  let offset;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offset = 1;
  } else {
    split = maxLen;
    offset = 0;
  }
  return line.substring(0, split) + '\n' + wrap(line.substring(split + offset), maxLen);



  // if (line.length <= maxLen) {
  //   return line;
  // }

  // // array of words in line
  // const words = line.split(' ');
  // // temp variable for each line as it's added
  // let newLine = [];
  // // properly formatted string
  // let wrapped = '';
  // let error = false;

  // words.forEach(word => {
  //   if (newLine.join(' ').length + word.length < maxLen) {
  //     newLine.push(word);
  //   } else if (word.length > maxLen) {
  //     error = true;
  //   } else {
  //     wrapped = wrapped + (newLine.join(' ') + '\n')
  //     newLine = [word];
  //   }
  // })

  // if (newLine.length > 0) {
  //   wrapped = wrapped + (newLine.join(' ') + '\n')
  // }

  // return error ? 'Error!' : wrapped;
}

module.exports = wrap;
