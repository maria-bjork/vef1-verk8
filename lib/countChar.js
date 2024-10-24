import { isString, splitOnWhitespace } from "./helpers";

/**
 * Telur fjölda stafa í streng sem eru í characters fylki.
 * @param {string} str Strengur til að telja stafi í
 * @param {string[]} characters Fylki af stöfum sem á að telja
 * @returns {number} Fjöldi stafa í streng sem eru í characters
 */
export function countGivenCharactersInString(str, characters) {
  if (!isString(str)) {
    return 0;
  }

  const splitStr = splitOnWhitespace(str);

  let count = 0;

  for (const char of splitStr) {
    if (characters.includes(char)) {
      count += 1;
    }
  }

  return count;
}

console.assert(
  countGivenCharactersInString("", []) === 0,
  "countGivenCharactersInString: skilar 0 ef tómi strengur"
);
console.assert(
  countGivenCharactersInString("asdf", []) === 0,
  "countGivenCharactersInString: skilar 0 ef tóma fylkið"
);
console.assert(
  countGivenCharactersInString("halló", ["a", "l"]) === 3,
  "countGivenCharactersInString: skilar fjölda stafa í streng"
);
