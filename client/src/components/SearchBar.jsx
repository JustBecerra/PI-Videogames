import React, {useState} from 'react';


function SearchBar(){
    const [input, setInput] = useState('');

    return(
        <div>
            <input type='text' placeholder='Search game'/>
        </div>
    )
}

export default SearchBar;