export function MainContent({articles,isLoading}){
    if (isLoading) {
        return <p>Loading articles...</p>;
      }
    
      if (articles.length === 0) {
        return <p>No articles available at the moment.</p>;
      }
    return (
        <>
            {articles.map((article)=>(
            <div key={article.article_id}>
                <h2>{article.title}</h2>
                <img src={article.article_img_url}/>
                <section>
                    <p>Author: {article.author}, Topic: {article.topic}</p>
                    <p>Date created: {article.created_at}, Votes: {article.votes}</p>
                    <p>Number of Comments: {article.comment_count}</p>
                    <p>Link to full article</p>
                </section>
            </div>
    ))}
        </>
    )
}