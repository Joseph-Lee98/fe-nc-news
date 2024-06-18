
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function HomepageSidebar (){
    const [selectedTopic, setSelectedTopic] = useState('');
    const navigate = useNavigate();
  
    const handleFilter = () => {
      if (selectedTopic) {
        navigate(`/${selectedTopic}Articles`);
      }
    };
  
    return (
      <div>
        <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
          <option value="">Select Topic</option>
          <option value="coding">Coding</option>
          <option value="football">Football</option>
          <option value="cooking">Cooking</option>
        </select>
        <button onClick={handleFilter}>Filter</button>
      </div>
    );
  };