import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Profile(props) {

  const [position, setPosition] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [organization, setOrganization] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const organizationData = await axios.get(`http://localhost:5555/communities/${props.org}`);

        if (props.positionID !== null) {
          const positionData = await axios.get(`http://localhost:5555/positions/${props.positionID}`);
          setPosition(positionData.data);
        }

        setOrganization(organizationData.data);
        setDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [imagePath, setImagePath] = useState(`../src/assets/${props.id}.jpg`);
  const bannerPath = `../src/assets/banners/${props.banner}.jpg`;

  useEffect(() => {
    loadImage(`../src/assets/${props.id}.jpg`)
      .then((resolvedPath) => setImagePath(resolvedPath))
      .catch((errorPath) => setImagePath(errorPath));
  }, [props.id]);

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
  <>

  <div className="h-2/4 sm:h-64 overflow-hidden">
    <img className="w-full rounded-t object-none object-bottom" src={bannerPath} />
  </div>

  <div className="flex justify-start pb-1 px-5 -mt-14 bg-stone-100">

    <span clspanss="block relative h-32 w-32">
    <img className="mx-auto object-cover rounded-full h-56 w-56 bg-white p-1" src={imagePath} />
    </span>

    <div className="mt-16 px-8 mb-8">

      <div className="flex items-center content-center">
        
        <h2 className="text-3xl font-bold mt-2">{props.name}</h2>

        { props.positionID != null ? (
          <span className="text-lg mx-4 font-semibold text-purple-800 text-xs font-medium mt-2.5 px-2.5 py-0.5 rounded border border-purple-400">{position.title}</span>
        ) : null }

        { props.isAccount == 1 ?
        <Link to={`/edit/${props.id}`} id={props.id}>
          <svg className="mt-2 w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"/>
          </svg>
        </Link>
        : null }
      </div>

      <p className="text-gray-400 my-2">{props.bio}</p>

      <div className="flex flex-wrap sm:gap-4">
        <Link className="flex items-center">
          <svg className="w-6 h-6 text-gray-800 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M5 9a7 7 0 1 1 8 7v5a1 1 0 1 1-2 0v-5a7 7 0 0 1-6-7Zm6-1c.2-.3.6-.5 1-.5a1 1 0 1 0 0-2A3.5 3.5 0 0 0 8.5 9a1 1 0 0 0 2 0c0-.4.2-.8.4-1Z" clipRule="evenodd"/>
          </svg>
          <span>{props.location}</span>
        </Link>

        <Link className="flex items-center">
          <svg className="w-6 h-6 text-gray-800 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clipRule="evenodd"/>
          </svg>
          <span >{props.facebook}</span>
        </Link>

        <Link className="flex items-center">
          <svg className="w-6 h-6 text-gray-800 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clipRule="evenodd"/>
          <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
          </svg>  
          <span >{props.linkedin}</span>
        </Link>
      </div>

      { organization.title != undefined ? (
      <div className="flex my-2">
        <Link to={`/communities/${organization._id}`} className="bg-green-100 hover:bg-green-200 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded border border-green-400 inline-flex items-center justify-center">
        {organization.title}</Link>
      </div>
      ) : null }

    </div>

  </div>

  <hr />
  
  </>
  }
  </>
  )
}