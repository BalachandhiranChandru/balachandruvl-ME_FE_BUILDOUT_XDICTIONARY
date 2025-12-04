import React, { useState } from "react";
function DictionaryApp() {
    
    // eslint-disable-next-line
    const [dictionary, setDictionary] = useState([
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." },
        { word: "Props", meaning: "Short for 'properties.' Read-only data passed from a parent component to a child component." },
        { word: "JSX", meaning: "A syntax extension for JavaScript that looks like HTML and is used to describe the UI structure." },
        { word: "Virtual DOM", meaning: "An in-memory representation of the real Document Object Model (DOM) that React uses to efficiently update the UI." },
        { word: "Hook", meaning: "A special function (like 'useState' or 'useEffect') that lets you use React features without writing a class component." },
        { word: "Lifecycle Methods", meaning: "Special methods (in class components) that are called at specific times during a component's existence (mounting, updating, unmounting)." },
        { word: "Functional Component", meaning: "A component defined as a simple JavaScript function that receives props as an argument and returns JSX." },
        { word: "Router", meaning: "A library (commonly 'React Router') used to manage navigation and display different components based on the URL path." }
    ]);
    const [searchWord, setSearchWord] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const handleSearch = () => {
        const foundWord = dictionary.find(
            (e) => e.word.toLowerCase() === searchWord.toLowerCase()
        );
        if (foundWord) {
            setSearchResult(foundWord.meaning);
        } else {
            setSearchResult("Word not found in the dictionary.");
        }
    };
    return (
        <div>
            <h1>Dictionary App</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search for a word..."
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                <strong>Definition:</strong>
                <p>{searchResult}</p>
            </div>
        </div>
    );
}

export default DictionaryApp;