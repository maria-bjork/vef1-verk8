/**
 *
 * @param {Element} el
 */
function removeHidden(el) {
  el.classList.remove("hidden");
}

const outputElement = document.querySelector(".output");

if (outputElement) {
  removeHidden(outputElement);
}

export { removeHidden };
