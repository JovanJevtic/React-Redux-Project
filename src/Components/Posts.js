import React, { useEffect, useState } from 'react';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div className="posts">
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts;
