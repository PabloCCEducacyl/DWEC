import { useState, useEffect } from "react";


function Posts(){
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchPosts(params) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            return await res.json()
            setLoading(false)
        }

        setPosts(fetchPosts())
    }, [])
}

export default Posts