// Using getElementsByClassName
let ele = document.getElementsByClassName("test");
console.log(ele);  // Log the collection of elements with class "test"
console.log(Array.isArray(ele));  // Check if the returned collection is an array (it's not)
ele[0].innerText = "Hello";  // Set the text of the first element in the collection to "Hello"

// Convert the HTMLCollection to an array
let x = [...ele];
console.log(x, Array.isArray(x));  // Log the array and check if it's an array
x.map(element => {
    console.log(element);  // Log each element
    element.style.backgroundColor = "orange";  // Change the background color of each element
});

// Using querySelector and querySelectorAll
let ele1 = document.querySelector("#mru");
console.log(ele1);  // Log the element with ID "mru"

let ele2 = document.querySelector(".test");
console.log(ele2);  // Log the first element with class "test"

// Using querySelectorAll to select multiple elements
let ele3 = document.querySelectorAll(".test");
console.log(ele3);  // Log all elements with class "test"
