import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

// Parameters: Title, Day Age, Tag, Content
export default function PostContent(props) {

  const [tag1, setTag1] = useState([]);
  const [tag2, setTag2] = useState([]);
  const [tag3, setTag3] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tag1Data, tag2Data, tag3Data] = await Promise.all([
          props.tag1 !== null ? axios.get(`http://localhost:5555/topics/${props.tag1}`) : Promise.resolve(null),
          props.tag2 !== null ? axios.get(`http://localhost:5555/topics/${props.tag2}`) : Promise.resolve(null),
          props.tag3 !== null ? axios.get(`http://localhost:5555/topics/${props.tag3}`) : Promise.resolve(null)
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
  }, [props.tag1, props.tag2, props.tag3]);

  const imagePath = `../src/assets/${props.userID}.jpg`;

  return (
  <>
  {dataLoaded && 
  <>

  {/* Title */}
  <Link to="">
    <h5 className="py-2 text-4xl font-semibold text-gray-900">{props.title}</h5>
  </Link>

  {/* Date Posted */}
  <div className="flex items-center">

    <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-gray-500 ">
    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
    </svg>
    {props.day} days ago
    </span>

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
  
  </div>
  
  {/* Content */}
  <p className="mt-3 text-gray-700 text-sm">
  {props.content}
  </p>
    
  </>
  }
  </>
  )
}