function saveToDb(data) {
    return new Promise((resolve, reject) => {

        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("Success: Data saved -> " + data);
        } else {
            reject("Error: Weak internet connection");
        }

    });
}

saveToDb("Apna College")
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});




saveToDb("Apna College")
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
