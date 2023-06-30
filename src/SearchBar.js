import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }){
    const [story,setStory] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(story);
    }

    const handleChange = (event) => {
        setStory(event.target.value);
    };

    return (
        <div className='search-bar'>
            <form className='search-form' onSubmit={handleFormSubmit}>
                <label>Enter Stock Symbol</label>
                <input value={story} onChange={handleChange}/>
            </form>
        </div>
    );
}

export default SearchBar;