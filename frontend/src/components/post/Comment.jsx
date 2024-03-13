import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

// Parameters: ID
export default function Comment(props) {
  
  const [user, setUser] = useState({});
  const [comment, setComment] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commentData = await axios.get(`http://localhost:5555/comments/${props.commentID}`);
        const userData = await axios.get(`http://localhost:5555/users/${commentData.data.userID}`);
        setComment(commentData.data);
        setUser(userData.data);
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

  const [imagePath, setImagePath] = useState(`../src/assets/${user._id}.jpg`);

  useEffect(() => {
    loadImage(`../src/assets/${user._id}.jpg`)
      .then((resolvedPath) => setImagePath(resolvedPath))
      .catch((errorPath) => setImagePath(errorPath));
  }, [user._id]);

  function loadImage(path) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(path);
      };
      img.onerror = () => {
        reject("../src/assets/default.jpg");
      };
      img.src = path;
    });
  }

  return (
  <>
  { dataLoaded &&

  <article className={outerClassName}>

    <footer className="flex justify-between items-center">

      <div className="flex items-center">
        <p className="inline-flex items-center mr-2 text-sm text-gray-900 font-semibold">
          <Link to={`/users/${user._id}`}><img  className="mr-2 w-6 h-6 rounded-full" src={imagePath} /></Link>
          <Link to={`/users/${user._id}`}>{user.firstName + ` ` + user.lastName}</Link>
        </p>
        <p className="text-sm text-gray-600">
          <time>{calculateDays(comment.dateCommented)} {calculateDays(comment.dateCommented) > 1 ? "days ago" : "day ago"}</time>
        </p>
      </div>

    </footer>

    <p className="text-gray-500">{comment.content}</p>

    <div className="flex items-center mt-4 space-x-4">
      <button type="button"
      className="flex items-center text-sm text-gray-500 hover:underline font-medium">
        <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
        </svg>
        Reply
      </button>
      {props.isAccount == 1 ?
      <Link to="/edit/006">
        <svg className="w-6 h-6 text-gray-800 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
        </svg>
      </Link>
      : null}
    </div>

  </article>
  
  }
  </>
  )
}