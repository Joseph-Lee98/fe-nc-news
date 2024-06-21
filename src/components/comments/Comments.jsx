import { useState } from "react";
import { deleteComment } from "../../utils/api";

export function Comments({ comments, isLoading, setIsLoading, err, setErr, user, setComments, articles, setArticles, article, setArticle }) {
    const [deletedComment, setDeletedComment] = useState(null);
    const [deletedCommentIndex, setDeletedCommentIndex] = useState(null);

    if (isLoading) {
        return <p>Loading comments...</p>;
    }

    if (comments.length === 0) {
        return <p>No comments available at the moment.</p>;
    }

    const handleDeleteComment = (comment) => {
        const articleIndex = articles.findIndex(article => article.article_id === Number(comment.article_id));
        setDeletedCommentIndex(articleIndex);
        setDeletedComment({ ...comment });
        setIsLoading(true);
        setErr(null);

        deleteComment(comment.comment_id)
            .then(() => {
                const copyComments = JSON.parse(JSON.stringify(comments));
                const filteredComments = copyComments.filter(existingComment => existingComment.comment_id !== comment.comment_id);

                const copyArticles = JSON.parse(JSON.stringify(articles));
                copyArticles[articleIndex].comment_count = String(Number(copyArticles[articleIndex].comment_count) - 1);

                const updatedArticle={...article};
                updatedArticle.comment_count = String(Number(updatedArticle.comment_count)-1)
                setArticle(updatedArticle)
                setComments(filteredComments);
                setArticles(copyArticles);
                setErr(null);
                setIsLoading(false);
                setDeletedComment(null);
                setDeletedCommentIndex(null);
            })
            .catch((error) => {
                const copyComments = JSON.parse(JSON.stringify(comments));
                copyComments.splice(deletedCommentIndex, 0, { ...deletedComment });

                const copyArticles = JSON.parse(JSON.stringify(articles));
                copyArticles[articleIndex].comment_count = String(Number(copyArticles[articleIndex].comment_count) + 1);

                const updatedArticle={...article};
                updatedArticle.comment_count = String(Number(updatedArticle.comment_count)+1)
                setArticle(updatedArticle)
                setComments(copyComments);
                setArticles(copyArticles);
                setErr('Oops, something went wrong, please try again');
                setIsLoading(false);
            });
    };

    return (
        <>
            {comments.map((comment) => (
                <div key={comment.comment_id}>
                    <h3>{comment.author}</h3>
                    <p>{comment.body}</p>
                    <p>Date created: {comment.created_at}, Votes: {comment.votes}</p>
                    {user.username === comment.author ? <button onClick={() => handleDeleteComment(comment)}>Delete Comment</button> : null}
                    {isLoading ? <p>Deleting comment...</p> : null}
                    {err ? <p>{err}</p> : null}
                </div>
            ))}
        </>
    );
}
