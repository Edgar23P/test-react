import React from 'react';
import './search-bar.css';

function searchBar () {
    return (
        <div className="conatiner">
            <div className="item">
                <input type="text" placeholder="Buscar..."></input>
            </div> 
        </div>
    );
}

export default searchBar;