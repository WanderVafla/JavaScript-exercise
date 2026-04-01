/**
 * The DOM (Document Object Model) is the central element to interact between javascript and web page.
 * DOM is an object representation of all the html elements
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
 */

/**
 * You need to change the color of the html element with the id "change-my-color"
 */
export function getElementFromDomAndChangeColorToRed() {
  // Write your code here
  const changeColorEl = document.getElementById('change-my-color')
  changeColorEl.style.color = 'red'
  return changeColorEl
}

/**
 * You need to add two paragraph in the div with id "add-your-elements-in-this-element"
 * The first paragraph must contain "Bonjour", the second "Toto"
 */
export function addElementsInDOM() {
  // Write your code here
  const listElements = document.getElementById('add-your-elements-in-this-element')
  listElements.innerHTML = `<p>Bonjour</p><p>Toto</p>`
  return listElements
}
/**
 * You get a list of elements, and you have to add it in a html list, the list
 * should be in the element with id "add-list-here"
 * Each element in the list should have the background color indicated in the color key of the listElements
 * @param {array<{name: string, color: string}>} listElements
 */
export function addAListInDomFromAnArrayOfObjects(listElements) {
  // Write your code here
  for (const element of listElements) {
    const newElementList = document.createElement('li')
    const textElementList = document.createTextNode(element.name)
    newElementList.appendChild(textElementList)

    document
      .getElementById('add-list-here')
      .appendChild(newElementList).style.backgroundColor = element.color
  }
}
