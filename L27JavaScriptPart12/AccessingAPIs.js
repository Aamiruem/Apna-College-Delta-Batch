fetch("https://api.github.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });


async function getUsers() {

    try {

        let response = await fetch("https://api.github.com/users");

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Error:", error);

    }

}

getUsers();





async function getDog() {

   let response = await fetch("https://dog.ceo/api/breeds/image/random");

   let data = await response.json();

   console.log(data.message);
}

getDog();






async function getJoke() {

   let response = await fetch("https://official-joke-api.appspot.com/random_joke");

   let data = await response.json();

   console.log(data.setup);
   console.log(data.punchline);
}

getJoke();
