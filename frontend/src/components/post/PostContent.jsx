import React, { useEffect, useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useAuthContext } from '../../hooks/useAuthContext';
import axios from 'axios'
const apiURL = import.meta.env.VITE_BACKEND_URL

// Parameters: Title, Day Age, Tag, Content
export default function PostContent(props) {

  const { user } = useAuthContext();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  const [postLoaded, setPostLoaded] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
    const postData = await axios.get(apiURL + `posts/${id}`);
    setPost(postData.data);
    setPostLoaded(true);
    };

    fetchData();
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

  const [selectedTag, setSelectedTag] = useState('');

  const [tag1, setTag1] = useState([]);
  const [tag2, setTag2] = useState([]);
  const [tag3, setTag3] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [topicTitle, setTopicTitle] = useState('');

  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    // setEditedContent(comment.content);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {

        const [tag1Data, tag2Data, tag3Data] = await Promise.all([
          props.tag1 !== null ? axios.get(apiURL + `topics/${props.tag1}`) : Promise.resolve(null),
          props.tag2 !== null ? axios.get(apiURL + `topics/${props.tag2}`) : Promise.resolve(null),
          props.tag3 !== null ? axios.get(apiURL + `topics/${props.tag3}`) : Promise.resolve(null)
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

  const imagePath = `/assets/${props.userID}.jpg`;

  const handleInputChange = (e) => {
    setPost({
      ...post,
      title: e.target.value
    });
  };

  const handleContentChange = (e) => {
    setPost({
      ...post,
      content: e.target.value
    });
  };

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {

      post.tags[0] = selectedTag;

      console.log(post);

      await axios.put(apiURL + `posts/${id}`, post);
      console.log("Post updated successfully!");

    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
  
      await axios.delete(apiURL + `posts/${id}`);
      console.log("Post deleted successfully!");
  
      const userData = await axios.get(apiURL + `users/${user.id}`);
      const updatedUser = userData.data;
  
      updatedUser.postIDs = updatedUser.postIDs.filter(postID => postID !== id);
  
      await axios.put(apiURL + `users/${user.id}`, updatedUser);
      console.log("User data updated successfully!");
  
      navigate(-1);
    } catch (error) {
      console.error(error);
    }  
  };

  if (postLoaded) {
    const getTitle = async () => {
      try {
      const data = await axios.get(apiURL + `topics/${post.tags[0]}`);
      setTopicTitle(data.data.title);
    } catch (error) {
      console.log(error);
    }
  }
    getTitle();
  }
  
  return (
  <>
  {dataLoaded && postLoaded &&
  <>

  {/* Title */}

  { props.isEditing ?
  <input type="text" id="title" className="block w-full text-xl align-middle pl-2 p-2 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
  onChange={handleInputChange}
  value={post.title}  />
  : <h5 className="text-xl pl-2 mt-4 mb-2 font-semibold text-gray-900">{post.title}</h5> }

  <div className="flex items-center">

    {/* Date Posted */}
    <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-gray-500 ">
    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
    </svg>
    {props.day === 1 ? `Today` : props.day + ` days ago`}
    </span>

    {/* Tags */}
    <div className="flex flex-wrap mb-2 pt-3">

      { props.isEditing ? 
      <select onChange={handleTagChange} className="block w-full p-0.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" required>
        {topics.map((topic, index) => (
          <option key={index} value={topic._id} defaultValue={post.tags[0] === topic._id}>
            {topic.title}
          </option>
        ))}
      </select>
      : 
      <span className="mr-2 mb-1 px-2 py-1 text-xs bg-green-400/30 text-slate rounded">{topicTitle}</span>
      }
      
    </div>
  
  </div>
  
  {/* Content */}
  { props.isEditing ?
  <textarea onChange={handleContentChange} className="rounded-lg mt-3 w-full text-md text-gray-700 py-2 pl-4 border border-gray-300 shadow resize-none" type="textarea" defaultValue={post.content} >
  </textarea>
  : 
  <ReactMarkdown className="mt-3 pl-2 text-gray-700 text-md" breaks={true}>{post.content}</ReactMarkdown>
  }

{ props.isEditing ? 
  <>
    <button onClick={handleSave} to={`/posts/${id}`} type="submit" className="inline-flex mb-1.5 mr-4 items-end py-2.5 mt-2 px-4 text-xs font-medium text-center text-white bg-gray-800 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">Save</button>
    <button onClick={handleDelete} type="submit" className="inline-flex items-end py-2.5 mt-2 px-4 text-xs font-medium text-center text-white bg-red-800 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">Delete</button>
  </>
  : null }
  </>
  }
  </>
  )
}