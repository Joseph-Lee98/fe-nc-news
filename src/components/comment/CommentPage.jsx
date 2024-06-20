import { useState } from "react";
import { createComment } from "../../utils/api";
import { NewComment } from "./NewComment";
import './CommentPage.css';

export function CommentPage({articles,setArticles,article_Id,user,err,setErr,isLoading,setIsLoading}){
    const [comment,setComment] = useState({});
    const [typedComment,setTypedComment] = useState('')
    const handlePostComment = (e)=>{
        e.preventDefault();
        setIsLoading(true);
        createComment(article_Id,typedComment,user.username)
        .then((response)=>{
            const index = articles.findIndex(article=>article.article_id===Number(article_Id))
            const copyArticles = JSON.parse(JSON.stringify(articles));
            copyArticles[index].comment_count = String(Number(copyArticles[index].comment_count) + 1);
            setArticles(copyArticles)
            setComment(response.data.comment)
            setTypedComment('')
            setErr(null);
            setIsLoading(false)
        })
        .catch(error=>{
            const index = articles.findIndex(article=>article.article_id===article_Id)
            const copyArticles = JSON.parse(JSON.stringify(articles));
            copyArticles[index].comment_count = String(Number(copyArticles[index].comment_count) - 1);
            setArticles(copyArticles);
            setComment({})
            setErr('Something went wrong, please try again.');
            setIsLoading(false);
        })
        // 
    }
    return (
        <div id="comment-page-container">
            <section id="comment-form-container">
                <h2>Post a comment:</h2>
                <form onSubmit={handlePostComment}>
                    <label>
                        Type your comment:
                        <input value={typedComment} onChange={(e)=>setTypedComment(e.target.value)}/>
                    </label>
                    <button type='submit'>Post comment</button>
                </form>
            </section>
            {Object.keys(comment).length>0 ? <NewComment isLoading={isLoading} comment={comment}/>: <p>{err}</p>}
        </div>
    )
}