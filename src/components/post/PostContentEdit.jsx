import { Link } from 'react-router-dom'

// Parameters: Title, Day Age, Tag, Content
export default function PostContentEdit(props) {
  return (
  <>

  {/* Title */}
  <Link to="">
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
    

    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-green-400">
      {props.tag1}
      <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300" data-dismiss-target="#badge-dismiss-green" aria-label="Remove">
      <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Remove badge</span>
      </button>
    </span>

    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-green-400">
      {props.tag2}
      <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300" data-dismiss-target="#badge-dismiss-green" aria-label="Remove">
      <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Remove badge</span>
      </button>
    </span>

    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-green-400">
      {props.tag3}
      <button type="button" class="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300" data-dismiss-target="#badge-dismiss-green" aria-label="Remove">
      <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
      <span class="sr-only">Remove badge</span>
      </button>
    </span>
  
  </div>
  
  {/* Content */}
  <textarea className="rounded-lg mt-4 w-full text-sm text-gray-700 py-2 pl-4 border border-gray-300 shadow resize-none" rows="5" type="textarea" placeholder={props.content} >
  </textarea>
    
  </>
  )
}