import { useState, useEffect } from "react"; // Don't forget to import useEffect

export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";

    // Use state to store the fetched joke
    const [joke, setJoke] = useState(null);

    // Function to fetch a new joke
    const getNewJoke = async () => {
        try {
            let response = await fetch(URL);
            if (!response.ok) {
                throw new Error("Failed to fetch joke");
            }
            const data = await response.json();
            setJoke(data); // Set the joke in state
        } catch (error) {
            console.error(error);
            setJoke({ setup: "Error fetching joke", punchline: error.message });
        }
    };

    // Fetch the first joke when the component mounts
    useEffect(() => {
        const fetchFirstJoke = async () => {
            try {
                let response = await fetch(URL);
                let data = await response.json();
                setJoke(data); // Set the fetched joke in state
            } catch (error) {
                console.error(error);
                setJoke({ setup: "Error fetching joke", punchline: error.message });
            }
        };

        fetchFirstJoke(); // Call the async function to fetch the joke
    }, []); // Empty dependency array ensures it runs only once when the component mounts


    useEffect(() => {
    const fetchFirstJoke = async () => {
        try {
            let response = await fetch(URL);
            let data = await response.json();
            setJoke(data);
        } catch (error) {
            console.error(error);
            setJoke({ setup: "Error fetching joke", punchline: error.message });
        }
    };
    fetchFirstJoke();
}, []); // Empty dependency array ensures it runs once after the component mounts




    return (
        <div>
            <h1>My name is Joker</h1>
            <h2>A random joke:</h2>
            
            {/* Display the joke if it exists */}
            {joke && (
                <div>
                    <p><strong>Setup:</strong> {joke.setup}</p>
                    <p><strong>Punchline:</strong> {joke.punchline}</p>
                </div>
            )}

            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    );
}
