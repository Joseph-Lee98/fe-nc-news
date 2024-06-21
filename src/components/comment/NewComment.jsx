export function NewComment({comment}){
    
    return (
        <div>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>Date created: {comment.created_at}, Votes: {comment.votes}</p>
        </div>
    )
}