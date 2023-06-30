import DisplayTopics from './DisplayTopics';
import './TopicList.css'

function TopicList({ topic }){
    const renderedStories = topic.map((source) => {
        return <DisplayTopics key={source.id} source={source} />;
    })

    return <div className='topic-list'>{renderedStories}</div>
}

export default TopicList;