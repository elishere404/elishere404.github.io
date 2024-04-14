// function setColorAll(sourceSelector, targetSelector, property) {
//     const sourceElement = document.querySelector(sourceSelector);
//     if (!sourceElement) {
//         console.error(`No source element found for selector: ${sourceSelector}`);
//         return;
//     }

//     const targetElements = document.querySelectorAll(targetSelector);
//     if (targetElements.length === 0) {
//         console.error(`No target elements found for selector: ${targetSelector}`);
//         return;
//     }

//     const sourceStyle = window.getComputedStyle(sourceElement);
//     const value = sourceStyle.getPropertyValue(property);

//     targetElements.forEach(target => {
//         target.style[property] = value;
//     });
// }

// // Call the function to set the color
// document.addEventListener('DOMContentLoaded', () => {
//     setColorAll('h1', 'a', 'color');
//     setColorAll('p', 'a', 'color');
// });

var line = document.getElementById('line')

line.style.width = window.innerHeight 
