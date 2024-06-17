import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [user,setUser] = useState('');
  const [avatar,setAvatar] = useState('');
  const [topicQuery,setTopicQuery] = useState('');
  const [articles,setArticles] = useState([]);
  const [comments,setComments] = useState([]);
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} user={user}/>
      <Routes>
        <Route path="/home" element={<Homepage />}/>
        <Route path="/codingArticles" element={<codingPage />}/>
        <Route path="/footballArticles" element={<footballPage />}/>
        <Route path="/cookingArticles" element={<cookingPage />}/>
        <Route path="/article" element={<Articlepage />}/>
        <Route path="/comment" element={<Commentpage />}/>
        <Route path="/user" element={<Userpage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
