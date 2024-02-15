import { Link } from 'react-router-dom'

// Parameters: Title, Day Age, Tag, Content
export default function PostContent(props) {
  return (
  <>

  {/* Title */}
  <Link to="/lets-go-archers">
    <h5 className="py-2 text-4xl font-semibold text-gray-900">{props.title}</h5>
  </Link>

  {/* Date Posted */}
  <div className="flex items-center">

    <span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-gray-500 ">
    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
    </svg>
    {props.day} days ago
    </span>

    {/* Badges */}
    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-green-400">{props.tag}</span>
  
  </div>
  
  {/* Content */}
  <p className="mt-3 text-gray-700 text-sm">
  {props.content}
  </p>
    
  </>
  )
}