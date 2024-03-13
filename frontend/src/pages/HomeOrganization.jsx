import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import MiniPost from '../components/post/MiniPost.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function HomeOrganization() {

  const { id } = useParams();
  const [postsData, setPostsData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5555/posts/');
        const posts = response.data.data;

        const postsWithOrgID = await Promise.all(
          posts.map(async post => {
            const userResponse = await axios.get(`http://localhost:5555/users/${post.userID}`);
            const user = userResponse.data;
            return {
              _id: post._id,
              userID: post.userID,
              organizationID: user.organizationIDs
            };
          })
        );
        
        setDataLoaded(true);
        setPostsData(postsWithOrgID);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
  <>

  <Sidebar />
  <Searchbar />
  <div className="sm:ml-64">

  {dataLoaded && postsData.map((post, index) => (
    <div key={post._id}>

    { post.organizationID == id ? (
      <MiniPost id={post._id} />
    ) : null }

    </div>
  ))}

  </div>

  </>
  )
}