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
      <h1 className='text-3xl text-gray-600 my-12'> Feed</h1>
      <ul className='mt-10'>
        {
          posts.map((post, idx) => (
            <div>
                  <li>Posted By : {post.author}</li>
                 <li key={idx}>{post.content}</li>
                 <li>Likes : {post.likes.length}</li>
                 <li>Comments: {post.numberOfComments}</li>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default Feed
