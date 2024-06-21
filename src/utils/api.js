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

// export function fetchArticles(topic) {
//   const config = {
//     params: {}
//   };

//   if (topic && topic.length>0) {
//     config.params.topic = topic;
//   }

//   return NCNewsApi.get('/articles', config);
// }

export function fetchArticles(topic) {
  const config = {
    params: {}
  };

  if (topic) {
    config.params.topic = topic;
  }

  return NCNewsApi.get('/articles', config)
    .catch(error => {
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Error request:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      throw error; // Rethrow the error after logging
    });
}

export function updateArticleById (articleId,inc_votes){
  return NCNewsApi.patch(`/articles/${articleId}`,{inc_votes})
}

export function fetchUsers(){
  return NCNewsApi.get('/users')
}

export function createComment (articleId,body,username){
  return NCNewsApi.post(`/articles/${articleId}/comments`,{
    body,
    username
  })
}

export function deleteComment(comment_id){
  return NCNewsApi.delete(`/comments/${comment_id}`)
}