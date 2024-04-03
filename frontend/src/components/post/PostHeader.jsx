import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom'

// Parameters: Name, Position
export default function PostHeader(props) {

  const [position, setPosition] = useState([]);

  useEffect(() => {
    console.log(props.image);
    if (props.positionID !== null) {
      axios
        .get(`http://localhost:5555/positions/${props.positionID}`)
        .then((res) => {
          setPosition(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.positionID]);

  return (
  <div className="flex">

  <div>
    <Link to={`/users/${props.userID}`}><img className="object-contain w-10 h-10 rounded-full shadow" src={props.image.url} /></Link>
  </div>

  <div className="flex items-center">

    <Link to={`/users/${props.userID}`}><h2 className="text-lg ml-2 font-semibold text-gray-900">{`${props.firstName}` + ` ` + `${props.lastName}`}</h2></Link>

    { position.title != undefined ? (
      <span className="bg-purple-100 mx-2 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded border border-purple-400">{position.title}</span>
    ) : null }

  </div>

  </div>
  )
}