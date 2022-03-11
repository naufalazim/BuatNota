import React, { useState } from "react";

const Search = ({handleSearchNote}) => {
    return(
        <div className="search">
            <form>
                <input 
                type="text"  
                className="form-control" 
                placeholder="search here..." 
                onChange={(e) => handleSearchNote(e.target.value)}
                autoFocus 
                />
            </form>
        </div>
    )
}

export default Search;