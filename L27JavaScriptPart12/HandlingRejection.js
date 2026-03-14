let promise = new Promise((resolve, reject) => {
    reject("Error occurred");
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });






async function test() {

    try {

        let result = await Promise.reject("Something failed");

        console.log(result);

    } catch (error) {

        console.log("Error:", error);

    }

}

test();





async function getData() {

    try {

        let response = await fetch("wrong-url");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Request failed:", error);

    }

}

getData();




function checkNumber(num) {

    return new Promise((resolve, reject) => {

        if (num > 10) {
            resolve("Number is greater than 10");
        }
        else {
            reject("Number is too small");
        }

    });

}

checkNumber(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
