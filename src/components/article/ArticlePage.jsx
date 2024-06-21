import './ArticlePage.css';
import { useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import {Article} from "./Article";
import { Comments } from '../comments/Comments';
import { CommentForm } from '../comment/CommentForm';
import { fetchArticleById,fetchCommentsById } from '../../utils/api';

export function ArticlePage({setIsLoading,isLoading,loggedIn,setArticle_Id,err,setErr,articles,setArticles,article_Id,user}){

    const [article,setArticle] = useState({});
    const [comments,setComments] = useState([]);

    const {articleId} = useParams();

    useEffect(()=>{
        setArticle_Id(articleId)
    },[articleId])

    useEffect(()=>{
        if (!article_Id) return;

        setIsLoading(true);
        setErr(null)
        fetchArticleById(article_Id)
        .then(response=>{
            setArticle(response.data.article);
            return fetchCommentsById(article_Id);
        })
        .then(response=>{
            setComments(response.data.comments)
        })
        .then(()=>{
            setIsLoading(false)
        })
        .catch((error)=>{
            setIsLoading(false)
            setErr('Oops, something went wrong');
        })
    },[article_Id])

    return (
        <>
            {err ? <p>{err}</p>
            : 
            <div id="article-page-container">
                <Article isLoading={isLoading} article={article} setArticle={setArticle} err={err} setErr={setErr}/>
                {loggedIn ?
                <CommentForm isLoading={isLoading} setIsLoading={setIsLoading} err={err} setErr={setErr} comments={comments} setComments={setComments} articles={articles} setArticles={setArticles} article_Id={article_Id} user={user}/>
                : null}
                <Comments comments={comments} isLoading={isLoading} setIsLoading={setIsLoading} err={err} setErr={setErr} user={user} setComments={setComments} articles={articles} setArticles={setArticles} article={article} setArticle={setArticle}/>
            </div>
            }
        </>
    )
}