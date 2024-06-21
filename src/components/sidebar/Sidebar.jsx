
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Sidebar ({topicSlug, setTopicSlug,filteredArticles,setFilteredArticles}){
    // const [selectedTopic, setSelectedTopic] = useState();
    const navigate = useNavigate();

    const [dateFilter,setDateFilter] = useState("")
    const [commentCountFilter,setCommentCountFilter] = useState("")
    const [votesFilter,setVotesFilter] = useState("")

    const handleTopicFilter = (e) => {
      e.preventDefault();
      if (topicSlug.length > 0) {
        navigate(`/${topicSlug}`);
      } else {
        navigate('/');
      }
    };

    const handleDateFilter = (e) => {
      e.preventDefault();
      if(dateFilter){
        setCommentCountFilter("");
        setVotesFilter("")
        const sortedArticles =[...filteredArticles];
        if(dateFilter==='asc'){
          setFilteredArticles(sortedArticles.sort((a,b)=>a.created_at.getTime() - b.created_at.getTime()))
        }
        else{
          setFilteredArticles(sortedArticles.sort((a,b)=>b.created_at.getTime() - a.created_at.getTime()))
        }
      }
    }

    const handleCommentCountFilter = (e) => {
      e.preventDefault();
      if(commentCountFilter){
        setDateFilter("");
        setVotesFilter("");
        const sortedArticles = [...filteredArticles]
        if(commentCountFilter==='asc'){
          setFilteredArticles(sortedArticles.sort((a,b)=>Number(a.comment_count) - Number(b.comment_count)))
        }
        else{
          setFilteredArticles(sortedArticles.sort((a,b)=>Number(b.comment_count) - Number(a.comment_count)))
        }
      }
    }

    const handleVotesFilter = (e) => {
      e.preventDefault();
      if(votesFilter){
        setDateFilter("");
        setCommentCountFilter("");
        const sortedArticles = [...filteredArticles]
        if(votesFilter==='asc'){
          setFilteredArticles(sortedArticles.sort((a,b)=>a.votes - b.votes))
        }
        else{
          setFilteredArticles(sortedArticles.sort((a,b)=>b.votes - a.votes))
        }
      }
    }
  
    return (
      <div id="aside">
        <form onSubmit = {handleTopicFilter}>
        <select value={topicSlug} onChange={(e) => setTopicSlug(e.target.value)}>
          <option value="">View all articles</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>
        <button type='submit'>Filter</button>
      </form>
      <form onSubmit={handleDateFilter}>
      <select value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
          <option value="">Select date sort filter</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button type='submit'>Filter</button>
      </form>
      <form onSubmit={handleCommentCountFilter}>
      <select value={commentCountFilter} onChange={(e) => setCommentCountFilter(e.target.value)}>
          <option value="">Select comment-count sort filter</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button type='submit'>Filter</button>
      </form>
      <form onSubmit={handleVotesFilter}>
      <select value={votesFilter} onChange={(e) => setVotesFilter(e.target.value)}>
          <option value="">Select votes sort filter</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <button type='submit'>Filter</button>
      </form>
      </div>
    );
  };