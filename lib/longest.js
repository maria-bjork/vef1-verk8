import { isString, splitOnWhitespace } from "./helpers.js";

export function longest(str) {
  console.log("test ", str);
  if (!isString(str)) {
    return null;
  }

  const words = splitOnWhitespace(str);

  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log("longlong", longestWord);
  return longestWord;
}

console.assert(
  longest("halló hæ") === "halló",
  "longest: skilar lengsta orðinu"
);
console.assert(
  longest("halló halli") === "halló",
  "longest: skilar fyrsta orðinu ef þau eru jafn löng"
);
console.assert(
  longest(null) === null,
  "longest: skilar null ef ekki er gefinn strengur"
);
console.assert(
  longest("") === "",
  "longest: skilar tómum streng ef tómur strengur er gefinn"
);
