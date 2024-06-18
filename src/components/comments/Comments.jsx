export function Comments({comments,isLoading}){
    if (isLoading) {
        return <p>Loading comments...</p>;
      }
    
      if (comments.length === 0) {
        return <p>No comments available at the moment.</p>;
      }
    return (
        <>
            {comments.map((comment)=>(
            <div key={comment.comment_id}>
                <h3>{comment.author}</h3>
                <p>{comment.body}</p>
                <p>Date created: {comment.created_at}, Votes: {comment.votes}</p>
            </div>
            ))}
        </>
    )
}