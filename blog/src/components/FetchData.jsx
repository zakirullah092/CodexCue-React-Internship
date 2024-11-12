import React, { useEffect, useState } from 'react';
import './FetchData.css';

function FetchData() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');  // State to track the current filter

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/posts');
                
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data.posts);
                } else {
                    throw new Error("Problem while fetching data");
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    const truncateText = (text, limit) => {
        if (text.length <= limit) return text;
        return text.slice(0, limit) + '...';
    };

    // Filtered posts based on selected filter type
    const getFilteredPosts = () => {
        if (filter === 'mostLiked') {
            return [...posts].sort((a, b) => b.reactions.likes - a.reactions.likes);
        } else if (filter === 'mostViewed') {
            return [...posts].sort((a, b) => b.views - a.views);
        } else if (filter === 'mostDisliked') {
            return [...posts].sort((a, b) => b.reactions.dislikes - a.reactions.dislikes);
        } else {
            return posts;
        }
    };

    return (
        <div className='container'>
            <header className="header">
                <h2>Fetch Blog Data</h2>
            </header>

            <aside className="sidebar">
                <ul className="filter-options">
                    <li><button onClick={() => setFilter('all')}>All Posts</button></li>
                    <li><button onClick={() => setFilter('mostViewed')}>Most Viewed</button></li>
                    <li><button onClick={() => setFilter('mostDisliked')}>Most Disliked</button></li>
                    <li><button onClick={() => setFilter('mostLiked')}>Most Liked</button></li>
                </ul>
            </aside>

            <section className="blog-list">
                {error && <p className="error-message">{error}</p>}
                {posts.length > 0 ? (
                    <ul className="post-list">
                        {getFilteredPosts().map(post => (
                            <li key={post.id} className="post-item">
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-body">
                                    {truncateText(post.body, 100)} 
                                    <a href={`https://dummyjson.com/posts/${post.id}`} className="see-more" target="_blank" rel="noopener noreferrer">
                                        see more
                                    </a>
                                </p>
                                <div className="post-details">
                                    <span className="likes">👍 {post.reactions.likes || 0}</span>
                                    <span className="dislikes">👎 {post.reactions.dislikes || 0}</span>
                                    <span className="views">👀 {post.views}</span>
                                    <span className="user-id">User: {post.userId}</span>
                                </div>
                            </li> 
                        ))}
                    </ul>
                ) : (
                    <p className="loading">Loading...</p>
                )}
            </section>
        </div>
    );
}

export default FetchData;
