import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function Communities() {
  const [communities, setCommunities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/communities')
      .then((res) => {
        setCommunities(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  // const firstName = (props.name.split(' ')[0]).toLowerCase();
  // const imagePath = `../src/assets/${firstName}.jpg`;
  // const bannerPath = `../src/assets/banners/${props.banner}.jpg`;
  // const orgAbbreviation = props.org.match(/\b([A-Z])/g).join('').toLowerCase();

  return (
  <>

  <Sidebar />
  <Searchbar />
  
  <div class="p-4 sm:ml-64">
  <div class="grid grid-cols-3 gap-4 mb-4">

  {communities.map((community, index) => (
  <div class="flex items-center justify-center h-100 rounded">
    <Link to={`./${community.title.match(/\b([A-Z])/g).join('').toLowerCase()}`} class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
      <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`./src/assets/organizations/${community.title.match(/\b([A-Z])/g).join('').toLowerCase()}.png`} />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{community.title}</h5>
        <p class="mb-3 font-normal text-gray-700">{community.description}</p>
      </div>
    </Link>
  </div>
  ))}

  </div>
  </div>
  
  </>
  )
}