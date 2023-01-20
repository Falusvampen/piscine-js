// Instructions
// Being stuck at home, bored, desperate and coming up with a lot of weird ideas,
// a friend asks you to develop a tool to measure his ocular skills.
// One of those Monoyer charts (https://en.wikipedia.org/wiki/Monoyer_chart) that ophthalmologists use.

// Generate a board where each new letter is harder, bigger, bolder and stronger.

// Write the function generateLetters which creates 120 div elements,
// each containing a letter randomly picked through the uppercase alphabet, and whose style properties have to be increased:

// each letter's font-size has to grow from 11 to 130 pixels.
// font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third.
// Files
// You only need to create & submit the JS file harder-bigger-bolder-stronger.js.
// We're providing you the following file to download and test locally:

// the HTML file harder-bigger-bolder-stronger.html to open in the browser, which includes:

// the JS script running some code, and which will enable you to run yours.
// some CSS pre-styled classes: feel free to use those as they are, or modify them.
// Notions
// createElement
// append
// style
// textContent

// The method createElement allows you to create a new HTML element.
// For example, document.createElement('div') would create a new <div> element.

// The method append allows you to add a new child element to an existing parent element.
// For example, document.getElementById('myDiv').append(document.createElement('p'))
// would add a new <p> element to the <div> element with the ID "myDiv".

// The style property allows you to access the style of an HTML element.
// For example, document.getElementById('myDiv').style.color = 'red'
// would change the color of the <div> element with the ID "myDiv" to red.

// The textContent property allows you to access the text content of an HTML element.
// For example, document.getElementById('myDiv').textContent = 'Hello World!'
// would change the text content of the <div> element with the ID "myDiv" to "Hello World!".

export function generateLetters() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letters = document.getElementById("letters");
  for (let i = 0; i < 120; i++) {
    const letter = document.createElement("div");
    letter.classList.add("letter");
    letter.textContent = alphabet[Math.floor(Math.random() * alphabet.length)];
    letter.style.fontSize = `${11 + (130 - 11) * (i / 120)}px`;
    // letter.style.fontWeight = i < 40 ? 300 : i < 80 ? 400 : 600;
    if (i < 40) {
      letter.style.fontWeight = 300;
    }
    if (i >= 40 && i < 80) {
      letter.style.fontWeight = 400;
    }
    if (i >= 80) {
      letter.style.fontWeight = 600;
    }
    document.body.append(letter);
  }
}
