
// DOM Elements
const dogBtn = document.getElementById("dogBtn");
const jokeBtn = document.getElementById("jokeBtn");
const dogImage = document.getElementById("dogImage");
const jokeText = document.getElementById("jokeText");

// API URLs
const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";
const JOKE_API_URL = "https://icanhazdadjoke.com/";

// Event Listeners
dogBtn.addEventListener("click", fetchRandomDog);
jokeBtn.addEventListener("click", fetchRandomJoke);

// Fetch random dog image
async function fetchRandomDog() {
    try {
        dogBtn.disabled = true;
        dogBtn.textContent = "Loading...";
        
        const response = await axios.get(DOG_API_URL);
        dogImage.src = response.data.message;
        
        // Add fade-in effect
        dogImage.style.opacity = 0;
        setTimeout(() => dogImage.style.opacity = 1, 100);
    } catch (error) {
        console.error("Error fetching dog image:", error);
        dogImage.alt = "Failed to load dog image";
    } finally {
        dogBtn.disabled = false;
        dogBtn.textContent = "Show Dog";
    }
}

// Fetch random dad joke
async function fetchRandomJoke() {
    try {
        jokeBtn.disabled = true;
        jokeBtn.textContent = "Loading...";
        
        const config = { headers: { Accept: "application/json" } };
        const response = await axios.get(JOKE_API_URL, config);
        
        jokeText.textContent = response.data.joke;
        
        // Add fade-in effect
        jokeText.style.opacity = 0;
        setTimeout(() => jokeText.style.opacity = 1, 100);
    } catch (error) {
        console.error("Error fetching joke:", error);
        jokeText.textContent = "Couldn't fetch a joke. Try again later!";
    } finally {
        jokeBtn.disabled = false;
        jokeBtn.textContent = "Tell Me a Joke";
    }
}

// Initial load
fetchRandomDog();
fetchRandomJoke();
