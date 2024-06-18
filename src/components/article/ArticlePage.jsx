import './ArticlePage.css';
import { useEffect,useState} from 'react';
import { NCNewsApi } from "../../utils/api";
import {Article} from "./Article";

export function ArticlePage({articleId,setIsLoading,isLoading}){

    const [article,setArticle] = useState({});

    useEffect(() => {
        setIsLoading(true);
        NCNewsApi.get(`/articles/${articleId}`)
            .then(response => {
                setArticle(response.data.article);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching article: ', error);
                setIsLoading(false);
            });
            
    }, [articleId, setIsLoading]);
    return (
        <div id='article-container'>
            <article id="full-article">
                <Article article={article} isLoading={isLoading}/>
            </article>
            <section id="comments">
                <p>comments...</p>
            </section>
        </div>
    )
}