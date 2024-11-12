import React from 'react';


function Dummy() {

    const [posts, setPosts] = useState();
    const [error, setError] = useState();
    const [filter, setFilter] = useState(second)
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('https/fakejson.data/posts');
                const response = await data.json();
                if (response.ok) {
                    setPosts(response);
                } else {
                    setError('Problem while fetching data ');
                }
            
            } catch (err) {
                throw new Error;
            }
        }
        fetchData();
    }, []);
    
    const filterFtn = () =>{
        if (filter === 'mostLiked') {
            setPosts((a, b) => b.reactions.likes - a.reactions.likes);
        } else if (filter === 'mostDisliked ') {
            setPosts((a, b) => b.reactions.disliked - a.reactions.disliked);
        } else {
            setPosts(posts);
        }
    }




  return (
      <div>
          <button onClick={() => setPosts('mostLiked')}>All Posts </button>
          {filterFtn().map((x) => (
              <li key={posts.id}><h3>{posts.title} </h3></li>
          ))}
      </div>
  )
}

export default Dummy 