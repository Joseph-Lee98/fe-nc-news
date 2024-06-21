
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Sidebar ({topicSlug, setTopicSlug}){
    // const [selectedTopic, setSelectedTopic] = useState();
    const navigate = useNavigate();
  
    const handleFilter = (e) => {
      e.preventDefault();
      if (topicSlug.length > 0) {
        navigate(`/${topicSlug}`);
      } else {
        navigate('/');
      }
    };
  
    return (
      <div id="aside">
        <form onSubmit = {handleFilter}>
        <select value={topicSlug} onChange={(e) => setTopicSlug(e.target.value)}>
          <option value="">View all articles</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>
        <button type='submit'>Filter</button>
      </form>
      </div>
      
    );
  };