import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { useAuthContext } from '../../hooks/useAuthContext';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const apiURL = import.meta.env.VITE_BACKEND_URL;

export default function CreatePost() {

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [topics, setTopics] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [postData, setPostData] = useState({
    titleArea: '',
    postArea: '',
    selectedTopic: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  }

  useEffect(() => {
    axios
      .get(apiURL + 'topics')
      .then((res) => {
        setTopics(res.data.data);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSubmit(e) {

    const newPostData = {
      userID: user.id,
      title: postData.titleArea,
      content: postData.postArea,
      tags: [postData.selectedTopic], 
    };

    axios.post(apiURL + 'posts', newPostData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    navigate(-1);

  }

  return (
  <>
  {dataLoaded && (
    
  <section className="bg-gray-50">
  <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
  <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 border-2">
  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
        Create New Post
      </h1>
    </div>

    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      
      <div className="relative z-0 w-full mb-5 group">
        <input 
          type="text" name="titleArea" id="titleArea"
          value={postData.titleArea} onChange={handleInputChange}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder="Title " required />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <textarea 
          type="text" name="postArea" id="postArea"
          value={postData.postArea} onChange={handleInputChange}
          className="block py-2.5 px-0 w-full h-40 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
          placeholder="What's on your mind..?" required />
      </div>
      
      <div className="w-full">
        <label className="block text-md mb-2">Select Post Topic</label>
        <select name="selectedTopic"
          value={postData.selectedTopic} onChange={handleInputChange}
          className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" required>
          <option value=''>Select Topic</option>
          {topics.map((topic, index) => (
            <option key={index} value={topic._id}>
              {topic.title}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full mt-5 mb-5">
      <div className="buttons flex">
        <Link to={`/users/${user.id}`} className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</Link>
        <button to={`/users/${user.id}`} type="submit" className="btn border border-green-900 p-1 px-4 font-semibold cursor-pointer text-gray-100 ml-2 bg-green-600">Post</button>
      </div>
      </div>

    </form>

  </div>
  </div>
  </div>
  </section>

  )}
  </>
  );
}
