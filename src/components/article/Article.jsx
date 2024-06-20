import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import './Article.css'
import { useState } from 'react';
import { updateArticleById } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

export function Article ({article,setArticle,isLoading,loggedIn,err,setErr}){
    const navigate = useNavigate();

      
      const [liked,setLiked] = useState(false)
      const [disliked,setDisliked] = useState(false)

      const handleCommentButton = ()=>{
        navigate('/commentPage');
      }

      const handleLikeButton = ()=>{
        if(disliked) return;
        if(!liked){
            const copyArticle = {...article};
            copyArticle.votes++;
            setArticle(copyArticle)
            setLiked(true)
            setErr(null);
            updateArticleById(article.article_id,1).catch((error)=>{
                const copyArticle = {...article};
                copyArticle.votes--;
                setArticle(copyArticle);
                setLiked(false)
                setErr('Something went wrong, please try again.')
            })
        }
        if(liked){
            const copyArticle = {...article};
            copyArticle.votes--;
            setArticle(copyArticle)
            setLiked(false)
            setErr(null);
            updateArticleById(article.article_id,-1).catch((error)=>{
                const copyArticle = {...article};
                copyArticle.votes++;
                setArticle(copyArticle);
                setLiked(true)
                setErr('Something went wrong, please try again.')
            })
        }
      }

      const handleDislikeButton = ()=>{
        if(liked) return;
        if(!disliked){
            const copyArticle = {...article};
            copyArticle.votes--;
            setArticle(copyArticle)
            setDisliked(true)
            setErr(null);
            updateArticleById(article.article_id,-1).catch((error)=>{
                const copyArticle = {...article};
                copyArticle.votes++;
                setArticle(copyArticle);
                setDisliked(false)
                setErr('Something went wrong, please try again.')
            })
        }
        if(disliked){
            const copyArticle = {...article};
            copyArticle.votes++;
            setArticle(copyArticle);
            setDisliked(false)
            setErr(null);
            updateArticleById(article.article_id,1).catch((error)=>{
                const copyArticle = {...article};
                copyArticle.votes--;
                setArticle(copyArticle);
                setDisliked(true)
                setErr('Something went wrong, please try again.')
            })
        }
      }

      if (isLoading) {
        return <p>Loading article...</p>;
      }
    
      if (Object.keys(article).length === 0) {
        return <p>No such article available at the moment.</p>;
      }

    return(
        <div id='article-container'>
            <h2>{article.title}</h2>
            <img src={article.article_img_url}/>
            <p>{article.body}</p>
            <section>
                <p>Author: {article.author}, Topic: {article.topic}</p>
                <p>Date created: {article.created_at}, Votes: {article.votes}</p>
                <p>Number of Comments: {article.comment_count}</p>
            </section>
            <div id='article-buttons'>
                <ThumbUpOffAltIcon onClick={handleLikeButton} className={`article-button ${liked ? 'like-btn-clicked' : '' }`}/>
                <ThumbDownOffAltIcon onClick={handleDislikeButton} className={`article-button ${disliked ? 'dislike-btn-clicked' : ''}`}/>
                {loggedIn ? <button onClick={handleCommentButton}>Post a comment</button> : null}
            </div>
            {err ? <p>{err}</p> : null}
        </div>
    )
}