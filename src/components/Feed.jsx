import React, {useState, useEffect, use} from 'react'
import axios from 'axios';

const Feed = () => {

    // state variable for posts

    const [posts, setPosts] = useState([]);
    console.log("posts", posts)

    const getAllPosts = async() => {
        try{
          const response = await axios.get("http://localhost:4000/api/get-posts");
          setPosts(response.data.posts);
        }catch(err){
            console.log("err", err)
        }
    }

    useEffect(() => {
        getAllPosts();
    }, [])


  return (
    <div>
      <h1>LinkedIN Feed</h1>
    </div>
  )
}

export default Feed
