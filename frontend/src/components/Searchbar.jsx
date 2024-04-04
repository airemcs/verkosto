import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios';

export default function Searchbar(props) {
  const[post,setPost] = useState({});
  const[user, setUser] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const postData = await axios.get(`http://localhost:5555/api/posts/${props.id}`);
        setPost(postData.data);
        setDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  })
  return (
    <>
    {dataLoaded &&
    <nav className="sticky top-0 bg-white border-b border-gray-200">
      <div className="flex items-center justify-center py-2 px-4">
        <div className="relative flex items-center w-full max-w-3xl">

          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>

          <input type="text" id="search" className="block w-full py-2 pl-10 pr-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500" placeholder="Search..." />
        
        </div>
      </div>
    </nav>
    }
  </>
  );
}