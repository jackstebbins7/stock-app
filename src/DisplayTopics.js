import './DisplayTopic.css'

function DisplayTopics({ source }){
    return  <div className="stock-story"> 
            <a href={source.url} target="_blank">
                <img src={source.urlToImage} href={source.url} alt="news article"></img>
                <h4>{source.title}</h4>
                </a>
            </div>
    
}

export default DisplayTopics;