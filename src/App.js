import { useState } from 'react';
import fetchImages from './api';
import SearchBar from './SearchBar';
import TopicList from './TopicList';
import fetchInfo from './stockApi';
import './App.css';

function App(){
    const [topic,setTopic] = useState([]);
    const [info,setInfo] = useState('');

    const handleSubmit = async (term) => {
        const result = await fetchImages(term);
        const info = await fetchInfo(term);
        setTopic(result);
        setInfo(info);
    };

    return (
    <body>
        <header className='header'>
            <h1>Stock Watch</h1>
        </header>
            <div className='articles'>
                <TopicList topic={topic}/>
            </div>
            <div className='stock-info'>
                <h1>Current Price: ${info}</h1>
            </div>
            <div className='metrics'>
                
            </div>
        <footer className='footer'>
            <SearchBar onSubmit={handleSubmit}/>
        </footer>
    </body>
    );
}

export default App;
