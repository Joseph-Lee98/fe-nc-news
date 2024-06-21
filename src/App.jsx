import { useState, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import {Header} from "./components/header/Header";
// import {Footer} from "./components/footer/Footer";
import { fetchArticles } from './utils/api';

import {ArticlesPage} from './components/articles/ArticlesPage';
// import {CodingPage} from './components/articles/CodingPage';
// import {FootballPage} from './components/articles/FootballPage';
// import {CookingPage} from './components/articles/CookingPage';
import {ArticlePage} from './components/article/ArticlePage';
import {UserPage} from './components/user/UserPage';


function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [user,setUser] = useState({username: 'Guest'});
  const [articles, setArticles] = useState([]);
  const [err,setErr] = useState(null)
  // const [topicQuery,setTopicQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [article_Id, setArticle_Id] = useState(null);

  useEffect(() => {
    fetchArticles()
      .then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching articles from API: ', error);
        setErr(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<ArticlesPage isLoading={isLoading} setIsLoading={setIsLoading} articles={articles} setArticles={setArticles}/>}/>
        <Route path="/coding" element={<ArticlesPage isLoading={isLoading} setIsLoading={setIsLoading} articles={articles} setArticles={setArticles}/>}/>
        <Route path="/football" element={<ArticlesPage isLoading={isLoading} setIsLoading={setIsLoading} articles={articles} setArticles={setArticles}/>}/>
        <Route path="/cooking" element={<ArticlesPage isLoading={isLoading} setIsLoading={setIsLoading} articles={articles} setArticles={setArticles}/>}/>
        <Route path="/articles/:articleId" element={<ArticlePage isLoading={isLoading} setIsLoading={setIsLoading} loggedIn={loggedIn} setArticle_Id={setArticle_Id} err={err} setErr={setErr} articles={articles} setArticles={setArticles} article_Id={article_Id} user={user}/>}/>
        <Route path="/userPage" element={<UserPage user={user} setUser={setUser} setLoggedIn={setLoggedIn} />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
