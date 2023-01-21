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

import { gossips } from "./data.js";
export function grid() {
  let allChange = document.createElement("div");
  allChange.className = "ranges";
  let width = document.createElement("input");
  width.className = "range";
  width.id = "width";
  width.type = "range";
  width.value = "";
  width.min = "200";
  width.max = "800";
  width.addEventListener("input", function () {
    let gos = document.querySelectorAll(".gossip");
    gos.forEach((e) => {
      e.style.width = width.value + "px";
    });
  });

  let fontSize = document.createElement("input");
  fontSize.className = "range";
  fontSize.id = "fontSize";
  fontSize.type = "range";
  fontSize.min = "20";
  fontSize.max = "40";
  fontSize.value = "";
  fontSize.addEventListener("input", function () {
    let gos = document.querySelectorAll(".gossip");
    gos.forEach((e) => {
      e.style.fontSize = fontSize.value + "px";
    });
  });

  let background = document.createElement("input");
  background.className = "range";
  background.id = "background";
  background.type = "range";
  background.min = "20";
  background.max = "75";
  background.value = "";
  background.addEventListener("input", function () {
    let gos = document.querySelectorAll(".gossip");
    gos.forEach((e) => {
      e.style.background = " hsl(280, 50%," + background.value + "%)";
    });
    console.log(background.value);
  });

  allChange.appendChild(width);
  allChange.appendChild(fontSize);
  allChange.appendChild(background);
  document.body.appendChild(allChange);

  let share = document.createElement("form");
  share.className = "gossip";
  document.body.appendChild(share);
  let textarea = document.createElement("textarea");
  textarea.setAttribute("placeholder", "Got a gossip to share?");
  share.appendChild(textarea);
  let button = document.createElement("button");
  button.innerHTML = "Share gossip!";
  share.appendChild(button);
  button.addEventListener("click", function () {
    let val = textarea.value;
    let goss1 = document.createElement("div");
    goss1.className = "gossip";
    goss1.textContent = val;
    document.body.insertBefore(goss1, document.querySelectorAll(".gossip")[1]);
    textarea.value = "";
    event.preventDefault();
  });
  addGross(gossips);
}
function addGross(goss) {
  goss.forEach((elem) => {
    let goss = document.createElement("div");
    goss.className = "gossip";
    goss.innerHTML = elem;
    document.body.appendChild(goss);
  });
}
