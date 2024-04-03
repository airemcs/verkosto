import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';

import Comment from './Comment.jsx'
import CommentNest from './CommentNest.jsx'
import PostHeader from './PostHeader.jsx'
import PostContent from './PostContent.jsx'
// Parameters: Name, Position
// Parameters: Title, Day Age, Tag1, Tag2, Tag3, Content
export default function ExtendedPost(props) {

  const { loggedUser } = useAuthContext();
  const [loggedUserId, setLoggedUserId] = useState(loggedUser && loggedUser.id);
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState({ url: "../src/assets/default.jpg" });
  const [dataLoaded, setDataLoaded] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postData = await axios.get(`http://localhost:5555/posts/${id}`);
        const userData = await axios.get(`http://localhost:5555/users/${postData.data.userID}`);
        setPost(postData.data);
        setUser(userData.data);
        
        if (userData.data.image.url !== "../src/assets/default.jpg") {
          setImage({ url: userData.data.image.url });
        } 
          
        if (postData.data.commentIDs && postData.data.commentIDs.length > 0) {
          setComments(postData.data.commentIDs);
        } else {
          setComments([]);
        }
        setDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  function calculateDays(datePosted) {
    let current = new Date();
    let posted = new Date(datePosted);
    return (Math.floor((current - posted) / (1000 * 3600 * 24)) + 1);
  }

  return (
  <>
  {dataLoaded && 

  <div className="w-full mx-5 my-10">
  <div className=" max-w-7xl mx-auto my-2 p-4 border border-gray-400 rounded-lg shadow-md">
    
    <div className="flex items-center">
      <PostHeader userID={user._id} positionID={user.positionID} firstName={user.firstName} lastName={user.lastName} image={image} />
      {loggedUserId === user._id ?
      <Link to={`/posts/${id}/edit`}>
        <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
        </svg>
      </Link>
      : null}
    </div>

    <PostContent  userID={post.userID} 
                  title={post.title} 
                  day={calculateDays(post.datePosted)} 
                  tag1={post.tags[0] ? post.tags[0] : null} 
                  tag2={post.tags[1] ? post.tags[1] : null} 
                  tag3={post.tags[2] ? post.tags[2] : null}
                  content={post.content} />
    
    <div className="flex items-center mb-1 mt-2">
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
      <p className="text-sm text-gray-600">{post.commentIDs.length} Comments</p>
    </div>

  </div>

  {/* Comments */}
  <div className=" max-w-7xl mx-auto my-2 p-4 border border-gray-400 rounded-lg shadow-md">
  <section>
      
    {/* Discussion Header */}
    <div className="flex justify-between items-center mb-5">
      <h2 className="text-lg lg:text-2xl font-bold text-gray-900">Discussion ({post.commentIDs.length})</h2>
    </div>

    <form>
      <div className="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200">
        <label htmlFor="comment" className="sr-only">Your Comment</label>
        <textarea className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
        id="comment" rows="2"
        placeholder="What's on your mind..?" required></textarea>
      </div>
      <button type="submit"
        className="inline-flex items-end py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
        Post Comment
      </button>
    </form>

    {comments.map((comment, index) => (
      <div key={comment}>
        <Comment postID={props.postID} commentID={comment} />
      </div>
    ))}

  </section>
  </div>

  </div>
  
  }
  </>
  )
}