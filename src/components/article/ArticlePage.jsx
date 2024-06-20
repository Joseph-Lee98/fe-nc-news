import './ArticlePage.css';
import { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {Article} from "./Article";
import { Comments } from '../comments/Comments';
import { fetchArticleById,fetchCommentsById } from '../../utils/api';

export function ArticlePage({setIsLoading,isLoading,loggedIn,setArticle_Id,err,setErr}){

    const [article,setArticle] = useState({});
    const [comments,setComments] = useState([]);

    const {articleId} = useParams();

    useEffect(()=>{
        setArticle_Id(articleId)
    },[articleId])

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
        <div id='article-page-container'>
            <article id="full-article">
                <Article article={article} setArticle={setArticle} isLoading={isLoading} loggedIn={loggedIn} err={err} setErr={setErr}/>
            </article>
            <section id="comments">
                <Comments comments={comments} isLoading={isLoading}/>
            </section>
        </div>
    )
}