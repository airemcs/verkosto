import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom'

// Parameters: Name, Position
export default function PostHeader(props) {

  const [position, setPosition] = useState([]);

  useEffect(() => {
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

  const [imagePath, setImagePath] = useState(`../src/assets/${props.userID}.jpg`);
  const bannerPath = `../src/assets/banners/${props.banner}.jpg`;

  useEffect(() => {
    loadImage(`../src/assets/${props.userID}.jpg`)
      .then((resolvedPath) => setImagePath(resolvedPath))
      .catch((errorPath) => setImagePath(errorPath));
  }, [props.userID]);

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
  <div className="flex">

  <div>
    <Link to={`/users/${props.userID}`}><img className="object-contain w-10 h-10 rounded-full shadow" src={imagePath} /></Link>
  </div>

  <div className="flex items-center">

    <Link to={`/users/${props.userID}`}><h2 className="text-lg mx-2 font-semibold text-gray-900">{`${props.firstName}` + ` ` + `${props.lastName}`}</h2></Link>

    { position.title != undefined ? (
      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded border border-purple-400">{position.title}</span>
    ) : null }

  </div>

  </div>
  )
}