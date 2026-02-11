let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    // console.log("clicked!");
    item.innerText = inp.value;


    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});


ul.addEventListener("clicked", function (event){
    if(event.target.nodeName == "Button"){
        let listItem = event.target.parentElement;
        console.log(listItem);
        console.log("delete");
        listItem.remove();
        // console.log("button clicked");
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function () {
//         delBtn.parentNode.remove();
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
