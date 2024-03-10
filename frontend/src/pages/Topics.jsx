import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function Topics() {

  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/topics')
      .then((res) => {
        setTopics(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  });

  return (
  <>

  <Sidebar />
  <Searchbar />
  
  <div class="p-4 sm:ml-64">
  <div class="grid grid-cols-3 gap-4 mb-4">

  {topics.map((topic, index) => (
  <div class="flex items-center justify-center h-100 rounded">
    <Link to={`/topics/${topic.title.replace(/\s+/g, '-').toLowerCase()}`} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`./src/assets/topics/${topic.title.split(' ')[0].toLowerCase()}.png`} />
      <div key={topic._id} class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{topic.title}</h5>
        <p class="mb-3 font-normal text-gray-700">{topic.description}</p>
      </div>
    </Link>
  </div>
  ))}

  </div>
  </div>
  
  </>
  )
}