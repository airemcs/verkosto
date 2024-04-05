import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const apiURL = import.meta.env.VITE_BACKEND_URL

import MiniPost from '../components/post/MiniPost.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function HomeTopics() {

  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(apiURL + 'posts/', {params: { search: searchQuery}})
      .then((res) => {
        const sortedPosts = res.data.data.sort((a, b) => b.upvotes - a.upvotes);
        setPosts(sortedPosts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchQuery]);

  return (
  <>

  <Sidebar />
  <Searchbar setSearchQuery={setSearchQuery}/>
  <div className="sm:ml-64">

  {posts.map((post, index) => (
    <div key={post._id}>

      { post.tags[0] == id || post.tags[1] == id || post.tags[2] == id ? (
        <MiniPost id={post._id} />
      ) : null }

    </div>
  ))}

  </div>

  </>
  )
}