import React, { useEffect, useState } from 'react'
import axios from 'axios';
const apiURL = import.meta.env.VITE_BACKEND_URL

import { Link } from 'react-router-dom'

// Parameters: Name, Position
export default function PostHeader(props) {

  const [community, setCommunity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(apiURL + `communities/${props.orgID}`);
        setCommunity(data.data.title);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
  <div className="flex">

  <div>
    <Link to={`/users/${props.userID}`}><img className="object-contain w-10 h-10 rounded-full shadow" src={props.image.url} /></Link>
  </div>

  <div className="flex items-center">

    <Link to={`/users/${props.userID}`}><h2 className="text-lg ml-2 font-semibold text-gray-900">{`${props.firstName}` + ` ` + `${props.lastName}`}</h2></Link>

    { props.orgID ? 
    <span className="bg-purple-100 mx-2 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded border border-purple-400">{community}</span>
    : null }

  </div>

  </div>
  )
}