import React, { useState } from "react";

const Search = () => {
    return(
        <div className="search">
            <form>
                <input 
                type="text"  
                className="form-control" 
                placeholder="search here..." 
                autoFocus 
                />
            </form>
        </div>
    )
}

export default Search;