import { useState } from "react";
import { createComment } from "../../utils/api";
import { NewComment } from "./NewComment";
import './CommentForm.css';

export function CommentForm({isLoading,setIsLoading,err,setErr,comments,setComments,articles,setArticles,article_Id,user}){
    const [comment,setComment] = useState(null);
    const [typedComment,setTypedComment] = useState('');

    const handlePostComment =(e)=>{
        e.preventDefault();
        setIsLoading(true);
        setErr(null);
        createComment(article_Id,typedComment,user.username)
        .then((response)=>{
            const index = articles.findIndex(article=>article.article_id===Number(article_Id))
            const copyArticles = JSON.parse(JSON.stringify(articles));
            copyArticles[index].comment_count = String(Number(copyArticles[index].comment_count) + 1);
            setArticles(copyArticles)
            setTypedComment('')
            setComment(response.data.comment)
            setComments([response.data.comment,...comments])
            setErr(null);
            setIsLoading(false);
        })
        .catch((error)=>{
            const index = articles.findIndex(article=>article.article_id===Number(article_Id))
            const copyArticles = JSON.parse(JSON.stringify(articles));
            copyArticles[index].comment_count = String(Number(copyArticles[index].comment_count) -1);
            setArticles(copyArticles)
            setComment({})
            const updatedComments = [...comments];
            updatedComments.shift();
            setComments(updatedComments);
            setErr('Something went wrong, please try again.');
            setIsLoading(false);
            console.error(error);
        })
    }

    if (isLoading) {
        return <p>Loading article/comments...</p>;
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
           
            {comment ? <NewComment comment={comment}/> : null}
            {comment!==null&&err ? <p>{err}</p> : null}
        </div>
    )

    
}