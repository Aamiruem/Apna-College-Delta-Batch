// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");
// btn.addEventListener('click', async () => {
//     let country = document.querySelector("input").value;
//     console.log(country);
//     // let colleges = getColleges(country);
//     let colArr = await getColleges(country);
//     // console.log(colArr);
//     show(colArr);
// });

// function show(colArr){
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colArr){
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }

// let country = "nepal";
// async function getColleges(country){
//     try{
//         let res = await axios.get(url+country);
//         // console.log(res.data);
//         return res.data;
//     } catch(e){
//         // console.log("ERROR - ",e);
//         // return "An error occurred while fetching data. Please try again later.";
//         return [];
//     }
// }













// const url = "http://universities.hipolabs.com/search?name=";
// const btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     const country = document.querySelector("input").value.trim();

//     if (!country) {
//         alert("Please enter a country name!");
//         return;
//     }

//     console.log("Searching for universities in:", country);

//     try {
//         const colleges = await getColleges(country);
//         console.log(colleges);
//         displayColleges(colleges); // Optional: Display results on the page
//     } catch (e) {
//         console.error("Error:", e);
//         alert("Failed to fetch universities. Please try again.");
//     }
// });

// async function getColleges(country) {
//     try {
//         const res = await axios.get(url + country);
//         return res.data;
//     } catch (e) {
//         console.error("API Error:", e);
//         return []; // Return empty array if API fails
//     }
// }

// // Optional: Display results in HTML
// function displayColleges(colleges) {
//     const resultsDiv = document.getElementById("results") || createResultsDiv();
//     resultsDiv.innerHTML = "";

//     if (colleges.length === 0) {
//         resultsDiv.innerHTML = "<p>No universities found.</p>";
//         return;
//     }

//     colleges.forEach(college => {
//         const collegeElement = document.createElement("div");
//         collegeElement.innerHTML = `
//       <h3>${college.name}</h3>
//       <p>Country: ${college.country}</p>
//       <p>Website: <a href="${college.web_pages[0]}" target="_blank">${college.web_pages[0]}</a></p>
//       <hr>
//     `;
//         resultsDiv.appendChild(collegeElement);
//     });
// }

// function createResultsDiv() {
//     const div = document.createElement("div");
//     div.id = "results";
//     document.body.appendChild(div);
//     return div;
// }





















// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     const input = document.getElementById('name');

//     form.addEventListener('submit', async (e) => {
//         e.preventDefault(); // Prevent page reload

//         const countryName = input.value.trim();

//         if (!countryName) {
//             alert('Please enter a country name!');
//             return;
//         }

//         try {
//             const countryData = await fetchCountryData(countryName);
//             displayCountryData(countryData);
//         } catch (error) {
//             console.error('Error fetching country data:', error);
//             alert('Country not found. Please try again!');
//         }
//     });
// });

// // Fetches country data from REST Countries API
// async function fetchCountryData(countryName) {
//     const response = await fetch(
//         `https://restcountries.com/v3.1/name/${countryName}`
//     );

//     if (!response.ok) {
//         throw new Error('Country not found');
//     }

//     const data = await response.json();
//     return data[0]; // Return the first matching country
// }

// // Displays country data on the page
// function displayCountryData(country) {
//     const resultDiv = document.getElementById('result') || createResultElement();

//     resultDiv.innerHTML = `
//       <h2>${country.name.common}</h2>
//       <img src="${country.flags.png}" alt="${country.name.common} flag" width="150">
//       <p><strong>Capital:</strong> ${country.capital}</p>
//       <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
//       <p><strong>Region:</strong> ${country.region}</p>
//     `;
// }

// // Creates a result container if it doesn't exist
// function createResultElement() {
//     const resultDiv = document.createElement('div');
//     resultDiv.id = 'result';
//     document.body.appendChild(resultDiv);
//     return resultDiv;
// }












document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchbtn');
    const countryInput = document.getElementById('countryInput');
    const resultsDiv = document.getElementById('results');

    searchBtn.addEventListener('click', async () => {
        const country = countryInput.value.trim();
        
        if (!country) {
            showError('Please enter a country name!');
            return;
        }

        try {
            const universities = await getUniversities(country);
            displayUniversities(universities);
        } catch (error) {
            console.error('Error:', error);
            showError('Failed to fetch universities. Please try again.');
        }
    });

    async function getUniversities(country) {
        const url = `http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`;
        const response = await axios.get(url);
        return response.data;
    }

    function displayUniversities(universities) {
        resultsDiv.innerHTML = '';

        if (universities.length === 0) {
            showError('No universities found for this country.');
            return;
        }

        universities.forEach(university => {
            const universityCard = document.createElement('div');
            universityCard.className = 'university-card';
            universityCard.innerHTML = `
                <h3>${university.name}</h3>
                <p><strong>Country:</strong> ${university.country}</p>
                ${university.web_pages?.length ? `<p><strong>Website:</strong> <a href="${university.web_pages[0]}" target="_blank">${university.web_pages[0]}</a></p>` : ''}
                ${university.domains?.length ? `<p><strong>Domain:</strong> ${university.domains[0]}</p>` : ''}
            `;
            resultsDiv.appendChild(universityCard);
        });
    }

    function showError(message) {
        resultsDiv.innerHTML = `<p class="error-message">${message}</p>`;
    }
});
