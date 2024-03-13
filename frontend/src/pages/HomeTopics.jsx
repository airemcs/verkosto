import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import MiniPost from '../components/post/MiniPost.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function HomeTopics() {

  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5555/posts/')
      .then((res) => {
        const sortedPosts = res.data.data.sort((a, b) => b.upvotes - a.upvotes);
        setPosts(sortedPosts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
  <>

  <Sidebar />
  <Searchbar />
  <div className="sm:ml-64">

  {posts.map((post, index) => (
    <div key={post._id}>

      { post.tags[0] == id || post.tags[1] == id || post.tags[2] == id ? (
        <MiniPost id={post._id} />
      ) : null }
      
      {/* CONFIRMED: There are no missing values. */}
      {/* {console.log(post._id, post.userID)} */}
      {/* {console.log(post.tags[0])} */}
      {/* {console.log(post.tags[1])} */}
      {/* {console.log(post.tags[2])} */}
      {/* {console.log(post.title, calculateDays(post.datePosted), post.tags[0], post.tags[1], post.tags[2], post.upvotes, post.downvotes, post.commentIDs.length)} */}
      {/* {console.log(post.tags[0] ? post.tags[0] : null)} */}
      {/* {console.log(post.tags[1] ? post.tags[1] : null)} */}
      {/* {console.log(post.tags[2] ? post.tags[2] : null)} */}
      {/* {console.log(post.commentIDs)} */}

    </div>
  ))}

  </div>

  </>
  )
}