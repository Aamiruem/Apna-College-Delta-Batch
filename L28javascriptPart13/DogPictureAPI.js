const btn = document.querySelector("#btn");
const img = document.querySelector("#dogImg");

btn.addEventListener("click", async () => {

  let res = await axios.get("https://dog.ceo/api/breeds/image/random");

  img.src = res.data.message;

});
