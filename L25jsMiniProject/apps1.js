let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelector("list");

div.addEventListener("click", function (event) {
    console.log("div was clicked");
});

ul.addEventListener("click", function (event) {
    console.log("ul was clicked");
});

list.addEventListener("click", function (event) {
    console.log("list was clicked");
});

for(list of list){
    event.stopPropagation();
    console.log("list was clicked");
}
