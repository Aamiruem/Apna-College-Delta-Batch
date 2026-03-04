function oddEvenTest(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n % 2 == 0));
        }

    } else if(request == "even"){
        return function(n){
            console.log((n % 2 == 0));
        }
    } else{
        console.log("Wrong request ");
    }
}

let evenTest = oddEvenTest("even");

evenTest(5);

let oddTest = oddEvenTest("odd");

oddTest(5);



let odd = function(n){
    console.log(!(n % 2 == 0));

}

let even = function(n){
    console.log(n % 2 == 0);
    
}


function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n % 2 == 0));
        }
        return odd;

    } else if(request == "even"){
        let even = function(n){
            console.log(n % 2 == 0);
        }
        return even;

    } else{
        console.log("Wrong request ");
    }
}
let request = "odd"; //even

let oddFunction = oddOrEvenFactory(request);

oddFunction(5);







function multipleGreet(func, count) { // higher-order function
    for (let i = 1; i <= count; i++) {
        func(); // call the function passed in
    }

    // This function is defined but not used
    let greet = function () {
        console.log("hello");
    };
}

// Call multipleGreet with an anonymous function
multipleGreet(function () {
    console.log("Namaste");
}, 3);


multipleGreet(function () { console.log("Namaste") }, 1000);
