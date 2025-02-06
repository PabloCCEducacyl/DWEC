import './Posts.css'
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Comentarios from './Comentarios';


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
        <>
            <h1>Postes</h1>
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <Link to={`/user/${post.id}`}>{cogerUser(post.userId)?.name}</Link>;
                        <p>{post.body}</p>
                        <Comentarios id={post.id}/>
                    </div>
                ))}
            </div>
        </>
    );
    
}

export default Posts;