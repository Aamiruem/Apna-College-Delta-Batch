// import { useState, useEffect } from "react"; // Don't forget to import useEffect

// export default function Joker() {
//     const URL = "https://official-joke-api.appspot.com/random_joke";

//     // Use state to store the fetched joke
//     const [joke, setJoke] = useState(null);

//     // Function to fetch a new joke
//     const getNewJoke = async () => {
//         try {
//             let response = await fetch(URL);
//             if (!response.ok) {
//                 throw new Error("Failed to fetch joke");
//             }
//             const data = await response.json();
//             setJoke(data); // Set the joke in state
//         } catch (error) {
//             console.error(error);
//             setJoke({ setup: "Error fetching joke", punchline: error.message });
//         }
//     };

//     // Fetch the first joke when the component mounts
//     useEffect(() => {
//         const fetchFirstJoke = async () => {
//             try {
//                 let response = await fetch(URL);
//                 let data = await response.json();
//                 setJoke(data); // Set the fetched joke in state
//             } catch (error) {
//                 console.error(error);
//                 setJoke({ setup: "Error fetching joke", punchline: error.message });
//             }
//         };

//         fetchFirstJoke(); // Call the async function to fetch the joke
//     }, []); // Empty dependency array ensures it runs only once when the component mounts


//     useEffect(() => {
//     const fetchFirstJoke = async () => {
//         try {
//             let response = await fetch(URL);
//             let data = await response.json();
//             setJoke(data);
//         } catch (error) {
//             console.error(error);
//             setJoke({ setup: "Error fetching joke", punchline: error.message });
//         }
//     };
//     fetchFirstJoke();
// }, []); // Empty dependency array ensures it runs once after the component mounts




//     return (
//         <div>
//             <h1>My name is Joker</h1>
//             <h2>A random joke:</h2>
            
//             {/* Display the joke if it exists */}
//             {joke && (
//                 <div>
//                     <p><strong>Setup:</strong> {joke.setup}</p>
//                     <p><strong>Punchline:</strong> {joke.punchline}</p>
//                 </div>
//             )}

//             <button onClick={getNewJoke}>Get New Joke</button>
//         </div>
//     );
// }









import { useState, useEffect } from "react";

export default function Joker() {
    const URL = "https://official-joke-api.appspot.com/random_joke";
    const TRANSLATE_URL = "https://api.mymemory.translated.net/get"; // Free translation API

    const [joke, setJoke] = useState(null);
    const [hindiSetup, setHindiSetup] = useState("");
    const [hindiPunchline, setHindiPunchline] = useState("");
    const [translating, setTranslating] = useState(false);

    const translateText = async (text, targetLang = "hi") => {
        if (!text || text.includes("Error")) return text;
        
        try {
            const response = await fetch(`${TRANSLATE_URL}?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`);
            const data = await response.json();
            return data.responseData.translatedText;
        } catch (error) {
            console.error("Translation error:", error);
            return text; // Return original text if translation fails
        }
    };

    const translateJoke = async (setup, punchline) => {
        setTranslating(true);
        const translatedSetup = await translateText(setup);
        const translatedPunchline = await translateText(punchline);
        setHindiSetup(translatedSetup);
        setHindiPunchline(translatedPunchline);
        setTranslating(false);
    };

    const getNewJoke = async () => {
        try {
            let response = await fetch(URL);
            if (!response.ok) {
                throw new Error("Failed to fetch joke");
            }
            const data = await response.json();
            setJoke(data);
            await translateJoke(data.setup, data.punchline);
        } catch (error) {
            console.error(error);
            setJoke({ setup: "Error fetching joke", punchline: error.message });
            setHindiSetup("चुटकुला लाने में त्रुटि");
            setHindiPunchline(error.message);
        }
    };

    useEffect(() => {
        const fetchFirstJoke = async () => {
            try {
                let response = await fetch(URL);
                let data = await response.json();
                setJoke(data);
                await translateJoke(data.setup, data.punchline);
            } catch (error) {
                console.error(error);
                setJoke({ setup: "Error fetching joke", punchline: error.message });
                setHindiSetup("चुटकुला लाने में त्रुटि");
                setHindiPunchline(error.message);
            }
        };

        fetchFirstJoke();
    }, []);

    return (
        <div>
            <h1>My name is Joker / मेरा नाम जोकर है</h1>
            <h2>A random joke / एक यादृच्छिक चुटकुला:</h2>
            
            {joke && (
                <div>
                    {/* English Version */}
                    <div style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
                        <h3>📖 English / अंग्रेजी:</h3>
                        <p><strong>Setup / परिचय:</strong> {joke.setup}</p>
                        <p><strong>Punchline / चुटकीला अंत:</strong> {joke.punchline}</p>
                    </div>
                    
                    {/* Hindi Version */}
                    <div>
                        <h3>🇮🇳 हिंदी / Hindi:</h3>
                        {translating ? (
                            <p>अनुवाद हो रहा है... / Translating...</p>
                        ) : (
                            <>
                                <p><strong>परिचय:</strong> {hindiSetup || joke.setup}</p>
                                <p><strong>चुटकीला अंत:</strong> {hindiPunchline || joke.punchline}</p>
                            </>
                        )}
                    </div>
                </div>
            )}

            <button onClick={getNewJoke} style={{ marginTop: "20px", padding: "10px 20px" }}>
                🎭 Get New Joke / नया चुटकुला लें
            </button>
        </div>
    );
}
