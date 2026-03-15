document.addEventListener("DOMContentLoaded", () => {

const btn = document.getElementById("searchBtn");
const stateInput = document.getElementById("stateInput");
const results = document.getElementById("results");

btn.addEventListener("click", async () => {

    const state = stateInput.value.trim().toLowerCase();

    if(!state){
        showError("Please enter a state name");
        return;
    }

    try{

        const colleges = await getColleges();
        const filtered = colleges.filter(college =>
            college.name.toLowerCase().includes(state)
        );

        displayColleges(filtered);

    }catch(err){
        showError("Failed to fetch data");
    }

});

async function getColleges(){

    const url = "http://universities.hipolabs.com/search?country=India";

    const res = await axios.get(url);

    return res.data;

}

function displayColleges(colleges){

    results.innerHTML = "";

    if(colleges.length === 0){
        showError("No colleges found for this state");
        return;
    }

    colleges.forEach(college => {

        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
        <h3>${college.name}</h3>
        <p><b>Country:</b> ${college.country}</p>
        <p><b>Website:</b> 
        <a href="${college.web_pages[0]}" target="_blank">
        ${college.web_pages[0]}
        </a>
        </p>
        `;

        results.appendChild(div);

    });

}

function showError(msg){
    results.innerHTML = `<p class="error">${msg}</p>`;
}

});
