// Instructions
// Today, your mission is to build a 3-column brick tower, maintain it and finally break it.

// Create a function build which will create and display the amount of bricks passed as argument:

// each brick has to be created as a div and added to the page at a regular interval of 100ms.
// each brick will receive a unique id property, like the following:
// <div id="brick-1"></div>
// each brick in the middle column has to be set with the custom data attribute foundation,
// receiving the value true.
// Each one of the two emojis in the top-right corner fires a function on click:

// 🔨: triggers the function repair. Write the body of that function. It receives any number of ids.
// For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress
// if it is a brick situated in the middle column, and true if not.
// 🧨: triggers the destroy function. Write the body of that function. It removes the current last brick in the tower.
// Files
// You only need to create & submit the JS file build-brick-and-break.js,
// We're providing you the following file to download and test locally:

// the HTML file build-brick-and-break.html can be opened in the browser, which includes:
// the JS script running some code, and which will enable you to run your code.
// some CSS pre-styled classes: feel free to use those as they are, or modify them.
// Expected result
// You can see an example of the expected result here

// Notions
// createElement
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// append
// https://developer.mozilla.org/en-US/docs/Web/API/Element/append
// Element
// https://developer.mozilla.org/en-US/docs/Web/API/Element
// setInterval / clearInterval
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
// hasAttribute
// https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
// dataset / data-*
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*
// remove
// https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

// notes
// createElement: A method of the Document object that creates a new element with the specified name.
// append: A method of the Element object that adds a child element to the end of the element's children.
// Element: An object representing an element in an HTML or XML document.
// setInterval: A method of the Window object that repeatedly calls a function or evaluates an expression at specified intervals (in milliseconds).
// clearInterval: A method of the Window object that stops a function from being called repeatedly by clear the interval set by setInterval().
// hasAttribute: A method of the Element object that returns a Boolean indicating whether the element has the specified attribute or not.
// dataset: An object containing all the custom data attributes (data-*) set on the element.
// data-*: A way to store data private to the page or application, using custom attributes on HTML elements.
// remove: A method of the Element object that removes the element from the document.

// 1. create a function build which will create and display the amount of bricks passed as argument
// 2. each brick has to be created as a div and added to the page at a regular interval of 100ms
// 3. each brick will receive a unique id property, like the following: <div id="brick-1"></div>
// 4. each brick in the middle column has to be set with the custom data attribute foundation, receiving the value true
// 5. Each one of the two emojis in the top-right corner fires a function on click:
// 6. 🔨: triggers the function repair. Write the body of that function. It receives any number of ids.
// 7. For each id, it retrieves the HTML element, and sets the repaired custom attribute to in progress if it is a brick situated in the middle column, and true if not.
// 8. 🧨: triggers the destroy function. Write the body of that function. It removes the current last brick in the tower.

export function build(x) {
  let i = 1;
  let interval = setInterval(function () {
    let block = document.createElement("div");
    document.body.append(block);
    block.textContent = i;
    block.id = "brick-" + i;
    block.className = "brick";
    block.dataset.foundation = i % 3 === 0 ? true : false;
    ++i;
    if (i === x + 1) {
      clearInterval(interval);
    }
  }, 100);
}

export function repair(...repairs) {
  for (let i = 0; i < repairs.length; i++) {
    let elem = document.querySelector(`#${repairs[i]}`);
    let n = repairs[i].replace("brick-", "");
    if (n % 3 === 2) {
      elem.dataset.repaired = "in progress";
    } else {
      elem.dataset.repaired = "true";
    }
  }
}

export function destroy() {
  let elements = document.getElementsByClassName("brick");
  elements[elements.length - 1].remove();
}
