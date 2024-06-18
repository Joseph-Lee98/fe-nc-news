import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import {Header} from "./components/header/Header";
// import {Footer} from "./components/footer/Footer";

import {HomePage} from './components/articles/HomePage';
import {CodingPage} from './components/articles/CodingPage';
import {FootballPage} from './components/articles/FootballPage';
import {CookingPage} from './components/articles/CookingPage';
import {ArticlePage} from './components/article/ArticlePage';
import {CommentPage} from './components/comment/CommentPage';
import {UserPage} from './components/user/UserPage';


function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [user,setUser] = useState('Guest');
  const [avatar,setAvatar] = useState('src/assets/profile.png');
  const [topicQuery,setTopicQuery] = useState('');
  const [comments,setComments] = useState([]);
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} user={user} setUser={setUser} avatar={avatar} />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/codingArticles" element={<CodingPage />}/>
        <Route path="/footballArticles" element={<FootballPage />}/>
        <Route path="/cookingArticles" element={<CookingPage />}/>
        <Route path="/articlePage" element={<ArticlePage />}/>
        <Route path="/commentPage" element={<CommentPage />}/>
        <Route path="/userPage" element={<UserPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
