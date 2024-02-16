import { Link } from 'react-router-dom';

import Comment from './Comment.jsx'
import CommentNest from './CommentNest.jsx'
import PostHeader from './PostHeader.jsx'
import PostContentEdit from './PostContentEdit.jsx'

// Parameters: Name, Position
// Parameters: Title, Day Age, Tag1, Tag2, Tag3, Content
export default function ExtendedPostEditTemporary(props) {
  return (
  <>
  <div className="w-full mx-5 my-10">

  <div className=" max-w-7xl mx-auto  my-2 p-4 border border-gray-400 rounded-lg shadow-md">
    
    <div className="flex items-center">
      <PostHeader name={props.name} position={props.position} />
      <Link to="/post/006" type="button" class="inline-flex items-center mx-2 px-4 py-0.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Save
      </Link>
    </div>

    <PostContentEdit title={props.title} day={props.days} tag1={props.tag1} tag2={props.tag2} tag3={props.tag3} content={props.content} />
    
    <div className="flex items-center mb-1 mt-2">
      <button className="h-7 flex pl-1 pr-3 justify-between items-center border text-gray-600 bg-gray-200/50 border-gray-400 rounded-l-full duration-75 hover:text-emerald-500 hover:border-emerald-500 hover:border-2 hover:bg-gray-200 hover:font-medium" type="button">
        <svg className="w-6 h-4 mr-0.5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12.781 2.375c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 0 0 4 14h4v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625zM15 12h-1v8h-4v-8H6.081L12 4.601L17.919 12z"/>
        </svg><p className="text-sm">{props.likes}</p>
      </button>
      <button className="h-7 flex pl-1 pr-3 justify-between items-center bg-gray-200/50 text-gray-600 border-r border-t border-b border-gray-400 rounded-r-full mr-3 duration-75 hover:text-blue-400 hover:border-blue-300 hover:border-2 hover:bg-gray-200 hover:font-medium" type="button">
        <svg className="w-6 h-4 mr-0.5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20.901 10.566A1.001 1.001 0 0 0 20 10h-4V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H4a1.001 1.001 0 0 0-.781 1.625l8 10a1 1 0 0 0 1.562 0l8-10c.24-.301.286-.712.12-1.059M12 19.399L6.081 12H10V4h4v8h3.919z"/>
        </svg><p className="text-sm">{props.dislikes}</p>
      </button>

      <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
      </svg>
      <p className="text-sm text-gray-600">{props.comments} Comments</p>
    </div>

  </div>
  
  </div>
  </>
  )
}