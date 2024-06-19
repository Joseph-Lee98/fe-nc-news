import axios from "axios";

const NCNewsApi = axios.create({
  baseURL: "https://be-nc-news-d1cb.onrender.com/api",
});

export function fetchArticleById (articleId){
  return NCNewsApi.get(`/articles/${articleId}`);
}
  
export function fetchCommentsById (articleId){
  return NCNewsApi.get(`/articles/${articleId}/comments`);
}

export function fetchArticles (){
  return NCNewsApi.get('/articles')
} 

export function updateArticleById (articleId,inc_votes){
  return NCNewsApi.patch(`/articles/${articleId}`,{inc_votes})
}