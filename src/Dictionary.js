import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";
import "./Dictionary.css"

export default function Dictionary () {
    let [keyword, setKeyword] = useState (null);
    let [results, setResults] = useState (null);
    let [image, setImage] = useState (null);
    
    function handleWordResponse(response){
        setResults(response.data);
    }

    function handleImageResponse(response){
       setImage(response.data.hits);
    }

    function search(event) {
        event.preventDefault()
        let apiKey = `a3d36d3ff18dab96ef4b04bo91eb0t3c`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiUrl).then(handleWordResponse);

        let imageApiKey = `37138537-7b13c11010786f8284b87f54c`;
        let imageApiUrl = `https://pixabay.com/api/?key=${imageApiKey}&q=${keyword}&image_type=illustration&pretty=true&colors=grayscale`;

        axios.get(imageApiUrl).then(handleImageResponse);
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="search for..." onChange={handleKeywordChange} className="searchbar"/>
                <input type="submit" value="SUBMIT" onSubmit={handleKeywordChange} className="submit"/>
            </form>
            <Results results={results} />
            <Images image={image} />
        </div>
    )
};