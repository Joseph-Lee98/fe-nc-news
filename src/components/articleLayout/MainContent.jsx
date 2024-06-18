import { Link } from "react-router-dom";

export function MainContent({articles,isLoading,setArticleId}){
    if (isLoading) {
        return <p>Loading articles...</p>;
      }
    
      if (articles.length === 0) {
        return <p>No articles available at the moment.</p>;
      }

      const handleArticleClick = (articleId) => {
        setArticleId(articleId);
    };
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
                    <Link to='/articlePage'>
                        <p onClick={() => handleArticleClick(article.article_id)}>Link to full article</p>
                    </Link>
                </section>
            </div>
    ))}
        </>
    )
}