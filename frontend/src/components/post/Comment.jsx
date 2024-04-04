import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { useAuthContext } from '../../hooks/useAuthContext';
const apiURL = import.meta.env.VITE_BACKEND_URL

// Parameters: ID
export default function Comment(props) {
  
  const [user, setUser] = useState({});
  const [comment, setComment] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [image, setImage] = useState(`../src/assets/default.jpg`);
  // const [editedContent, setEditedContent] = useState(''); 

  const { loggedUser } = useAuthContext();

  const [loggedUserId, setLoggedUserId] = useState(loggedUser && loggedUser.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentData = await axios.get(apiURL + `comments/${props.commentID}`);
        const userData = await axios.get(apiURL + `users/${commentData.data.userID}`);
        setComment(commentData.data);
        setUser(userData.data);
        if (userData.data.image.url !== "../src/assets/default.jpg") {
          setImage(userData.data.image.url);
        } 
        setDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function calculateDays(dateCommented) {
    let current = new Date();
    let posted = new Date(dateCommented);
    return Math.floor((current - posted) / (1000 * 3600 * 24));
  }

  let outerClassName;

  if (comment.repliedCommentID == undefined) {
    outerClassName = "p-6 text-base bg-white rounded-lg"
  } else {
    outerClassName = "p-6 mb-3 mx-12 lg:ml-12 text-base rounded-lg"
  }

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    // setEditedContent(comment.content);
  };

  return (
  <>
  { dataLoaded && user && 

  <article className={outerClassName}>

    <footer className="flex justify-between items-center">

      <div className="flex items-center">
        <p className="inline-flex items-center mr-2 text-sm text-gray-900 font-semibold">
          <Link to={`/users/${user._id}`}><img  className="mr-2 w-6 h-6 rounded-full" src={image} /></Link>
          <Link to={`/users/${user._id}`}>{user.firstName + ` ` + user.lastName}</Link>
        </p>
        <p className="text-sm text-gray-600">
          <time>{calculateDays(comment.dateCommented) > 1 ? calculateDays(comment.dateCommented) + " days ago" : (calculateDays(comment.dateCommented) == 0 ? "Today" : calculateDays(comment.dateCommented) + " day ago")}</time>
        </p>
      </div>

    </footer>

    {isEditing ? (
            <>
            <textarea value={comment.content} rows="1" className="text-gray-500 my-2 border border-gray-300 rounded p-2 w-full" />
            <button onClick={handleEditToggle} type="submit"
              className="inline-flex items-end py-2 mb-2 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
              Save
            </button>
            </>
          ) : (
            <p className="text-gray-500 my-2">{comment.content}</p>
          )}

          <div className="flex items-center space-x-4">
            <button className="flex items-center text-sm text-gray-500 hover:underline font-medium">
              <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
              </svg>
            </button>
            {user._id === loggedUserId &&
              <Link onClick={handleEditToggle} >
                <svg className="w-6 h-6 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
                </svg>
              </Link>
            }
          </div>

  </article>
  
  }
  </>
  )
}