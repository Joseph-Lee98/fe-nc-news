import './ArticlePage.css';
import { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {Article} from "./Article";
import { Comments } from '../comments/Comments';
import { fetchArticleById,fetchCommentsById } from '../../utils/api';

export function ArticlePage({setIsLoading,isLoading}){

    const [article,setArticle] = useState({});
    const [comments,setComments] = useState([]);

    const {articleId} = useParams();
    useEffect(() => {
        setIsLoading(true);
        fetchArticleById(articleId)
            .then(response => {
                setArticle(response.data.article);
            })
            .then(()=>{
                return fetchCommentsById(articleId)
            })
            .then(response => {
                setComments(response.data.comments)
            })
            .then(()=>{
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching article: ', error);
                setIsLoading(false);
            });
            
    }, []);
    return (
        <div id='article-container'>
            <article id="full-article">
                <Article article={article} isLoading={isLoading}/>
            </article>
            <section id="comments">
                <Comments comments={comments} isLoading={isLoading}/>
            </section>
        </div>
    )
}