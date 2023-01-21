// Instructions
// Create the function grid which displays all the gossips,
// provided in the data file below, as cards on a grid (in the same order).

// They will each be represented as a div with the gossip class.

// The first gossip card must be a form. It will need a textarea,
// and a submit button with the text "Share gossip!". It will add new gossip to the list.

// Create 3 type="range" inputs with the class range, all wrapped in a div with the class ranges.

// id="width": that controls the width of cards from 200 to 800 pixels.
// id="fontSize": that controls the font size from 20 to 40 pixels.
// id="background": that control the background lightness from 20% to 75%.
// Use hsl for colors

// Files
// You only need to create & submit the JS file gossip-grid.js; we're providing you the following files to download and test locally:

// the HTML file gossip-grid.html to open in the browser, which includes:

// the JS script which will enable you to run your code.
// some CSS pre-styled classes: feel free to use those as they are, or modify them.
// the data file gossip-grid.data.js from which you can import gossips.

// Expected result
// You can see an example of the expected result here
// https://www.youtube.com/watch?v=nbR2eHBqTxU&feature=youtu.be

// Notions
// form
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Form
// input
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input
// text
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
// range
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range

import { gossips } from "./gossip-grid.data.js";

export function grid() {
  let body = document.querySelector("body");

  createRange();
  createForm();

  for (let i = 0; i < gossips.length; i++) {
    let elementDiv = document.createElement("div");
    elementDiv.setAttribute("class", "gossip");
    elementDiv.innerText = gossips[i];
    body.append(elementDiv);
  }
}

function createRange() {
  let body = document.querySelector("body");
  let divRange = document.createElement("div");
  divRange.setAttribute("class", "ranges");

  for (let i = 0; i < 3; i++) {
    let inputRange = document.createElement("input");
    inputRange.setAttribute("type", "range");

    if (i == 0) {
      inputRange.setAttribute("id", "width");
      inputRange.setAttribute("min", "200");
      inputRange.setAttribute("max", "800");

      inputRange.addEventListener("input", () => {
        let a = document.getElementsByClassName("gossip");

        for (let i = 0; i < a.length; i++) {
          a[i].setAttribute(
            "style",
            "width:" + inputRange.value.toString() + "px"
          );
        }
      });
    } else if (i == 1) {
      inputRange.setAttribute("id", "fontSize");
      inputRange.setAttribute("min", "20");
      inputRange.setAttribute("max", "40");

      inputRange.addEventListener("input", () => {
        let a = document.getElementsByClassName("gossip");

        for (let i = 0; i < a.length; i++) {
          a[i].setAttribute(
            "style",
            "font-size:" + inputRange.value.toString() + "px"
          );
        }
      });
    } else if (i == 2) {
      inputRange.setAttribute("id", "background");
      inputRange.setAttribute("min", "20");
      inputRange.setAttribute("max", "75");

      inputRange.addEventListener("input", () => {
        let a = document.getElementsByClassName("gossip");

        for (let i = 0; i < a.length; i++) {
          a[i].setAttribute(
            "style",
            "background:" + "hsl(280,50%," + inputRange.value.toString() + "%)"
          );
        }
      });
    }

    divRange.append(inputRange);
  }

  body.append(divRange);
}

function createForm() {
  let body = document.querySelector("body");
  let elementForm = document.createElement("form");
  let elementTextArea = document.createElement("textarea");
  let elementButton = document.createElement("button");

  elementForm.setAttribute("class", "gossip");
  elementButton.innerText = "Share gossip!";

  elementButton.addEventListener("click", () => {
    let elDiv = document.createElement("div");
    elDiv.setAttribute("class", "gossip");
    elDiv.innerText = elementTextArea.value;
    insertAfter(elementForm, elDiv);
    elementTextArea.value = "";
    event.preventDefault();
  });

  elementForm.append(elementTextArea, elementButton);
  body.append(elementForm);
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
