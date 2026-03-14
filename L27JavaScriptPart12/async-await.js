async function getData() {

  try {

    let response = await fetch("https://api.github.com/users");

    let data = await response.json();

    console.log(data);

  } catch (error) {

    console.log("Error:", error);

  }

}

getData();


async function getDogImage() {

  let response = await fetch("https://dog.ceo/api/breeds/image/random");

  let data = await response.json();

  console.log(data.message);

}

getDogImage();
