// let form = document.querySelector('form');
// form.addEventListener('submit', function (event) {
//     alert("This page says");
//     event.preventDefault();
//     let username = document.querySelector('#username');
//     let password = document.querySelector('#password');
//     alert('username: ' + username.value + ' password: ' + password.value);
// });



// let form = document.querySelector('form');
// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     alert("form submitted");

// });




let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert("form submitted");

    let inp = document.querySelector("input");
    console.dir("inp");

});



// let forms = document.querySelector('form');
// forms.addEventListener('submit', function (event) {
//     event.preventDefault();
//     alert("form submitted");

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.dir(inp.value);
//     console.log(forms);


//     let user = document.querySelector("#username");
//     let pass = document.querySelector("#password");
//     console.dir(user.value);
//     console.dir(pass.value);
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });






let forms = document.querySelector('form');
forms.addEventListener('submit', function (event) {
    event.preventDefault();
    alert("form submitted");

    let inp = document.querySelector("input");
    console.dir(inp);
    console.dir(inp.value);
    console.log(forms);


    let user = this.elements[0];
    let pass = this.elements[1];
    
    console.dir(user.value);
    console.dir(pass.value);
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});
