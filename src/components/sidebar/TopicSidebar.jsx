import { useNavigate } from 'react-router-dom';

export function TopicSidebar ({ topic }){
    const navigate = useNavigate();
  
    const handleUnfilter = () => {
      navigate('/');
    };
  
    return (
      <div>
        <p>Query set to topic: {topic}</p>
        <button onClick={handleUnfilter}>Unfilter</button>
      </div>
    );
  };