
// single element
const form = document.getElementById("todo-form")
console.log(form);

const form2 = document.querySelector("#todo-form");
console.log(form2);

// multiple elements

console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));


const items = document.querySelectorAll(".item");

console.log(items);

items.forEach((item) => {
    console.log(item);
});



