import { Link } from 'react-router-dom'

// Parameters: Name, Date, Content
export default function Comment(props) {
  
  const firstName = (props.name.split(' ')[0]).toLowerCase();
  const imagePath = `../src/assets/${firstName}.jpg`;

  return (
  <article class="p-6 mb-3 mx-12 lg:ml-12 text-base rounded-lg">

    <footer class="flex justify-between items-center">

      <div class="flex items-center">
        <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
          <Link to={`/user/${firstName}`}><img  class="mr-2 w-6 h-6 rounded-full" src={imagePath} /></Link>
          <Link to={`/user/${firstName}`}>{props.name}</Link>
        </p>
        <p class="text-sm text-gray-600">
          <time>{props.date}</time>
        </p>
      </div>

    </footer>

    <textarea className="rounded-lg mt-4 w-full text-sm text-gray-700 py-2 pl-4 border border-gray-300 shadow resize-none" rows="1" type="textarea" placeholder={props.content} >
    </textarea>

    <div class="flex items-center mt-4 space-x-4">
      <button type="button"
      class="flex items-center text-sm text-gray-500 hover:underline font-medium">
        <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
        </svg>
        Reply
      </button>
      <Link to="/post/006" type="button" class="inline-flex items-center mx-2 px-4 py-0.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Save
      </Link>
    </div>

  </article>
  )
}