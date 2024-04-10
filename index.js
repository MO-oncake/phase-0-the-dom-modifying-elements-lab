// Write your code here!
const main = document.querySelector(`#main`);
main.remove(); // removes the main element.

const newHeader = document.createElement(`h1`); // creates a new header that points to an h1 node.

newHeader.id = `victory`; // sets the id of the new header to 'victory'.

newHeader.innerHTML = `WILL is the champion`; // sets the innerHTML (content text) of the new header to 'YOUR-NAME is the champion'.