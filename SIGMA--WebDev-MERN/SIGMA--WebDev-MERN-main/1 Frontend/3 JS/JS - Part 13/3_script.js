// Updating Query strings

// Activity - Show universities name in a list
let universityUrl = "http://universities.hipolabs.com/search?name=";

async function getUniversities(cntry) {
    try {
        let response = await axios.get(universityUrl + cntry);
    return response.data;
    } catch(err) {
        console.log("Error :-", err);
        return [];
    }
}
let searchBtn = document.querySelector(".searchButton");
searchBtn.addEventListener("click", async () => {
    let country = document.querySelector(".searchInput").value;

    let universitiesArr = await getUniversities(country);
    // console.log(universitiesArr);
    showNames(universitiesArr);
});
function showNames(universitiesArray) {
    let list = document.querySelector(".uList");
    list.innerText = "";
    
    for (university of universitiesArray) {
        // console.log(university.name);
        let li = document.createElement("li");
        li.innerText = university.name;
        list.appendChild(li);
    }
}