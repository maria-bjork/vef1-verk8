/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

/**Öll importin */
import { longest } from "./lib/longest.js";
import { shortest } from "./lib/shortest.js";
import { reverse } from "./lib/reverse.js";
import { palindrome } from "./lib/palindrome.js";
// import { vowels } from "./lib/vowels.js";
//import { consonants } from "./lib/consonants.js";
/**commentað út því ég gat ekki fengið þetta til að virka*/

const textareaElement = document.querySelector("textarea");
const formElement = document.querySelector("form");

/**String handler sem notar föllin til þess að vinna úr streng sem skrifaður er inn.
 *
 * @param {string} value
 */
function stringHandler(value) {
  const input = document.querySelector(".input");
  if (input) {
    input.textContent = value;
  }

  if (value == "") {
    addHidden();
  } else {
    removeHidden();
  }
  /**Finna lengsta orð**/
  const longestElement = document.querySelector(".longest");
  if (longestElement) {
    longestElement.textContent = longest(value);
  }
  /**Finna stysta orð**/
  const shortestElement = document.querySelector(".shortest");
  if (shortestElement) {
    shortestElement.textContent = shortest(value);
  }

  /**Finna fjölda sérhljóða **/
  //   const vowelsElement = document.querySelector(".vowels");
  //   if (vowelsElement) {
  //     const number = vowels(value);
  //     vowelsElement.textContent = number.toString();
  //   }
  //Kommentað út því ég fékk þetta ekki til að virka

  /**Finna fjölda samhljóða **/
  //   const consonantsElement = document.querySelector(".consonants");
  //   if (consonantsElement) {
  //     const number = consonants(value);
  //     consonantsElement.textContent = number.    toString();
  //   }
  //Kommentað út því ég fékk þetta ekki til að virka

  /**Athuga hvort sé palindrome*/
  const palindromeElement = document.querySelector(".palindrome");
  if (palindromeElement) {
    if (palindrome(value) == false) {
      palindromeElement.textContent = "ekki";
    } else {
      palindromeElement.textContent = "";
    }
  }
  /**Strengurinn viðsnúinn */
  const reverseElement = document.querySelector(".reversed");
  if (reverseElement) {
    reverseElement.textContent = reverse(value);
  }
}

/**Það sem gerist þegar ýtt er á greina
 *
 * @param {Event} event
 */
function submitHandler(event) {
  console.log(event);
  event.preventDefault();
  const { target } = event;
  if (target) {
    const value = target.string.value;

    stringHandler(value);
  }
}

/**Það sem gerist þegar ýtt er á hreinsa */

function resetHandler(event) {
  event.preventDefault();
  stringHandler("");
  if (textareaElement) {
    textareaElement.value = "";
  }
}

/**On key handlers
 *
 * @param {Event} event
 */
function onKeyUpHandler(event) {
  console.log(event);
  const { target } = event;
  if (target) {
    const value = target.value;
    stringHandler(value);
  }
}

/**Event listeners */
if (formElement) {
  formElement.addEventListener("submit", submitHandler);
  formElement.addEventListener("reset", resetHandler);
}

if (textareaElement) {
  textareaElement.addEventListener("keyup", onKeyUpHandler);
}

/** Fjarlægja og bæta við hidden á output**/
function removeHidden() {
  const outputElement = document.querySelector(".output");

  outputElement?.classList.remove("hidden");
}

function addHidden() {
  const outputElement = document.querySelector(".output");

  outputElement?.classList.add("hidden");
}
