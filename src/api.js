import axios from 'axios';

const fetchImages = async (term) => {
    const images = await axios.get('https://newsapi.org/v2/everything', {
        headers: {
            Authorization: '83ce497fb93647fcba11ac596a974a10',
        },
        params: {
            apiKey: '83ce497fb93647fcba11ac596a974a10',
            q: term,
            pageSize:5,
            
        }
    });

    return images.data.articles;
};

export default fetchImages;