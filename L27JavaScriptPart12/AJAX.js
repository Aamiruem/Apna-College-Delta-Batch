let xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.example.com/data");

xhr.onload = function () {
   if (xhr.status === 200) {
      console.log(xhr.responseText);
   }
};

xhr.send();



fetch("https://api.example.com/data")
.then(response => response.json())
.then(data => {
   console.log(data);
})
.catch(error => {
   console.log(error);
});



async function getData() {

   try {

      let response = await fetch("https://api.example.com/data");

      let data = await response.json();

      console.log(data);

   } catch(error) {

      console.log(error);

   }

}

getData();
