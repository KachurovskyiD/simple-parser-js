// Parser for html pages

'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  let textNodes = [];

  function recursion(element) {
    element.childNodes.forEach(node => {
      // Your regex
      if (node.nodeName.match(/^H\d/)) {
        textNodes.push(node.textContent.trim());
      } else {
        recursion(node);
      }
    })
  }

  recursion(body);

  // JSON server
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(textNodes)
    })
    .then(response => response.json())
    .then(json => console.log(json));
});