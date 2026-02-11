const btns = document.querySelectorAll("button");

 for(btn of btns){ // btns.forEach((btn) => { both of same meaning
    btn.addEventListener("click", () => {
        console.log("btn was clicked")
    });

}
