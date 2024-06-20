export function NewComment({isLoading,comment}){
    if (isLoading) {
        return <p>Loading your posted comment...</p>;
      }
    
    return (
        <div>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>Date created: {comment.created_at}, Votes: {comment.votes}</p>
        </div>
    )
}