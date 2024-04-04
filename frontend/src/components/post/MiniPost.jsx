import React, { useEffect, useState } from 'react'
import axios from 'axios';
const apiURL = import.meta.env.VITE_BACKEND_URL

import { Link } from 'react-router-dom';
import PostHeader from './PostHeader.jsx'

// Parameters: Name, Position
// Parameters: Title, Days, Tag, Content
// Parameeters: Likes, Dislikes, Comments

export default function MiniPost(props) {

  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);
  const [tag1, setTag1] = useState([]);
  const [tag2, setTag2] = useState([]);
  const [tag3, setTag3] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await axios.get(apiURL + `posts/${props.id}`);

        setPost(postData.data);
        const userData = await axios.get(apiURL + `users/${postData.data.userID}`);
        setUser(userData.data);

        const [ tag1Data, tag2Data, tag3Data ] = await Promise.all([
          postData.data.tags[0] !== undefined ? axios.get(apiURL + `topics/${postData.data.tags[0]}`) : Promise.resolve(null),
          postData.data.tags[1] !== undefined ? axios.get(apiURL + `topics/${postData.data.tags[1]}`) : Promise.resolve(null),
          postData.data.tags[2] !== undefined ? axios.get(apiURL + `topics/${postData.data.tags[2]}`) : Promise.resolve(null)
        ]);
        
        setTag1(tag1Data ? tag1Data.data : []);
        setTag2(tag2Data ? tag2Data.data : []);
        setTag3(tag3Data ? tag3Data.data : []);
        setDataLoaded(true);

      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props.id]);

  function calculateDays(datePosted) {
    let current = new Date();
    let posted = new Date(datePosted);
    return Math.floor((current - posted) / (1000 * 3600 * 24) + 1);
  }

  return (
  <>
  {dataLoaded && user &&
  <div className="max-w-4xl mx-auto my-4 p-4 border border-gray-400 rounded-lg shadow-md">

    {/* Header and Date */}
    <div className="flex justify-between items-center mb-2">

      <div className="w-10/12">
        <PostHeader userID={post.userID} positionID={user.positionID} firstName={user.firstName} lastName={user.lastName} image={user.image} />
      </div>

      <span className="h-8 bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-gray-500 ">
        <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
        </svg>
        {(calculateDays(post.datePosted) === 0 ? `Today` : (calculateDays(post.datePosted) > 1 ? calculateDays(post.datePosted) + ` days ago` : calculateDays(post.datePosted) + ` day ago`)) }
      </span>

    </div>

    {/* Title */}
    <Link to={`/posts/${post._id}`} className="flex justify-between items-center mb-2">
        <h5 className="py-2 text-4xl font-semibold text-gray-900">{post.title}</h5>
    </Link>

    {/* Tags */}
    <div className="flex flex-wrap mb-2">

      { tag1.title != undefined ? (
        <span className="mr-2 mb-1 px-2 py-1 text-xs bg-green-400/30 text-slate rounded">{tag1.title}</span>
      ) : null }

      { tag2.title != undefined ? (
        <span className="mr-2 mb-1 px-2 py-1 text-xs bg-green-400/30 text-slate rounded">{tag2.title}</span>
      ) : null }

      { tag3.title != undefined ? (
        <span className="mr-2 mb-1 px-2 py-1 text-xs bg-green-400/30 text-slate rounded">{tag3.title}</span>
      ) : null }
      
    </div>

    {/* Short Text */}
    <div className="mb-5">
      <p className="text-gray-600 line-clamp-1 text-base">{post.content}</p>
      <Link to={`/posts/${post._id}`} className="text-base font-semibold text-gray-500 hover:underline">Read More</Link>
    </div>

    {/* Upvotes, Downvotes, Comments */}
    <div className="flex items-center mb-1">

      <button className="h-7 flex pl-1 pr-3 justify-between items-center border text-gray-600 bg-gray-200/50 border-gray-400 rounded-l-full duration-75 hover:text-emerald-500 hover:border-emerald-500 hover:border-2 hover:bg-gray-200 hover:font-medium" type="button">
        <svg className="w-6 h-4 mr-0.5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12z"/>
        </svg><p className="text-sm">{post.upvotes}</p>
      </button>

      <button className="h-7 flex pl-1 pr-3 justify-between items-center bg-gray-200/50 text-gray-600 border-r border-t border-b border-gray-400 rounded-r-full mr-3 duration-75 hover:text-blue-400 hover:border-blue-300 hover:border-2 hover:bg-gray-200 hover:font-medium" type="button">
        <svg className="w-6 h-4 mr-0.5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059M12 19.399L6.081 12H10V4h4v8h3.919z"/>
        </svg><p className="text-sm">{post.downvotes}</p>
      </button>

      <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
      </svg>

      <Link to={`/posts/${post._id}`} className="hover:underline">
        <p className="text-sm text-gray-600">{post.commentIDs.length} Comments</p>
      </Link>

    </div>

  </div>
  }
  </>
  )
}