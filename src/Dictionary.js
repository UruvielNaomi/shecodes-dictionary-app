import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary () {
    let [keyword, setKeyword] = useState (null);
    let [results, setResults] = useState (null);
    
    function handleResponse(response){
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault()
        let apiKey = `a3d36d3ff18dab96ef4b04bo91eb0t3c`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="type a word..." onChange={handleKeywordChange}/>
            </form>
            <Results results={results} />
        </div>
    )
};