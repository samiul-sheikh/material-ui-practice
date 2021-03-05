import { useEffect, useState } from 'react';
import './App.css';
import News from './Components/News/News';

function App() {
    const [articles, setArticle] = useState([])
    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=12780e2f84114c368bbdfdbd5b41113e';
        fetch(url)
        .then(res => res.json())
        .then(data =>setArticle(data.articles))
    }, [])

    return (
        <div>
            <h2>Headlines:{articles.length}</h2>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
}

export default App;
