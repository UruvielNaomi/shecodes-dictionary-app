import React, { useState } from "react";

export default function Dictionary () {
    let [keyword, setKeyword] = useState (null);
    
    function search(event) {
        event.preventDefault()
        alert(`searching for the definition of: "${keyword}"`);
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="type a word..." onChange={handleKeywordChange}/>
            </form>
        </div>
    )
};