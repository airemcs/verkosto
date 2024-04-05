import React, { useEffect, useState } from 'react'
import axios from 'axios';
const apiURL = import.meta.env.VITE_BACKEND_URL

import { Link } from 'react-router-dom'

// Parameters: Name, Position
export default function PostHeader(props) {

  return (
  <div className="flex">

  <div>
    <Link to={`/users/${props.userID}`}><img className="object-contain w-10 h-10 rounded-full shadow" src={props.image.url} /></Link>
  </div>

  <div className="flex items-center">

    <Link to={`/users/${props.userID}`}><h2 className="text-lg ml-2 font-semibold text-gray-900">{`${props.firstName}` + ` ` + `${props.lastName}`}</h2></Link>

  </div>

  </div>
  )
}