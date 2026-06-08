//Get Fetch API
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching data:', error));

//Post Fetch API
// const data = {
//     title: "foo",
//     body: "bar",    
//     userId: 1
// };
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
// }).then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error posting data:', error));

//Error Handling
fetch("https://jsonplaceholder.typicode.com/invalid-url")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));