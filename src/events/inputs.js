/**
 * You should trigger an alert when the user hits enter after entering text on the
 * input with id "write-some-text". The text on the alert should be the text typed in the input.
 * If input his empty, you should not trigger the alert
 */
export function displayInputContentInAlertOnEnterKey() {
  // Write your code here
  const input = document.getElementById("write-some-text");
  input.addEventListener("keydown", () => {
    if (event.key === 'Enter') {
      if (input.value.trim()) {
        alert(input.value)
      }
    }
  });
}

/**
 * On the page, you have an HTML input with the id "list-input".
 * The user can write text into it, and when he presses enter or blur the field,
 * the text should be added to a list of elements with id "list".
 */
export function addElementsInListOnEnterKey() {
  // Write your code here
 const input = document.getElementById("list-input");

  
  const addElLi = () => {
      if (input.value.trim()) {
        const newElList = document.createElement("li");
        newElList.textContent = input.value;
        document.getElementById("list").appendChild(newElList);
        input.value = ''
        newlist.addEventListener("click", (element) => element.remove());
        console.log("added");
        
      }
  };
  input.addEventListener("keydown", event => event.key === "Enter" ? addElLi(): '');
  input.addEventListener("blur", addElLi);
}
/**
 * Add functionalities to the list. Now, when you click on one of the li, the element should be removed.
 * Use the same list as the previous exercise. "#list"
 */
export function removeElementsFromListWhenClicked() {
  // Write your code here
  const input = document.getElementById("list");
  
  input.addEventListener("click", item => item.target.remove())
  
  
}
