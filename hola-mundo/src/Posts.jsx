import { useState, useEffect } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([])

    const [loading, setLoading] = useState(true);

    const cogerUser = (id) => {
        return users.find(user => user.id === id)
    }

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const resUsers = await fetch('https://jsonplaceholder.typicode.com/users')
                const dataPosts = await res.json();
                const dataUsers = await resUsers.json();

                setPosts(dataPosts);
                setUsers(dataUsers)
            } catch (error) {
                console.error("Error posts:", error);
            } finally {
                setLoading(false);
            }
        }
        
        fetchPosts();
    }, []);

    console.log(users)

    if (loading) {
        return <div><img src="/loading.gif"/></div>;
    }

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <h4>Autor: {cogerUser(post.userId)?.name}</h4>
                    <p>{post.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
    
}

export default Posts;