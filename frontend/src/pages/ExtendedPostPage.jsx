import React from 'react'
import { useParams } from 'react-router-dom'

import ExtendedPost from '../components/post/ExtendedPost.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Searchbar from '../components/Searchbar.jsx'

export default function ExtendedPostPage(){

  const { id } = useParams();

  return(
  <> 
  <div className="sm:ml-64">
    <Sidebar />
    <Searchbar />
    <ExtendedPost postID={id} />
  </div>
  </>
      
  )
}