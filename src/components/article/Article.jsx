export function Article ({article,isLoading}){
    if (isLoading) {
        return <p>Loading article...</p>;
      }
    
      if (Object.keys(article).length === 0) {
        return <p>No such article available at the moment.</p>;
      }
    return(
        <div>
            <h2>{article.title}</h2>
            <img src={article.article_img_url}/>
            <p>{article.body}</p>
            <section>
                <p>Author: {article.author}, Topic: {article.topic}</p>
                <p>Date created: {article.created_at}, Votes: {article.votes}</p>
                <p>Number of Comments: {article.comment_count}</p>
            </section>
        </div>
    )
}