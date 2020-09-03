// const longestCommonPrefix = (words) => {
//   if (words.length === 0) return '';
//   if (words.length === 1) return words[0];

//   let lcp = [];
//   for (let x = 0; x < words[0].length; x++) {
//     let inPrefix = true;
//     for (let y = 1; y < words.length; y++) {
//       if (words[y][x] !== words[0][x]) {
//         inPrefix = false;
//         break;
//       }
//     }
//     if (inPrefix) {
//       lcp.push(words[0][x]);
//     } else {
//       break;
//     }
//   }

//   return lcp.join('');

// }

const longestCommonPrefix = strs => {
  if (!strs.length) return '';
  for (let charIdx = 0; charIdx < strs[0].length; charIdx++) {
    for (let strIdx = 0; strIdx < strs.length; strIdx++) {
      if (strs[strIdx][charIdx] !== strs[0][charIdx]) return strs[0].slice(0, charIdx);
    }
  }
  return strs[0];
};

module.exports = longestCommonPrefix;
