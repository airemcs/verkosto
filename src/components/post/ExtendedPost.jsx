import { Link } from 'react-router-dom'
import PostHeader from './PostHeader.jsx'
import PostContent from './PostContent.jsx'

export default function ExtendedPost() {
  return (
  <>
  <div className="w-full mx-5 my-10">

  <div className=" max-w-7xl mx-auto  my-2 p-4 border border-gray-400 rounded-lg shadow-md">
    <PostHeader />
    <PostContent />
  </div>

  <div className=" max-w-7xl mx-auto my-2 p-4 border border-gray-400 rounded-lg shadow-md">
  <section>

    <div class="flex justify-between items-center mb-5">
      <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Discussion (4)</h2>
    </div>

    <form>
      <div class="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200">
        <label for="comment" class="sr-only">Your Comment</label>
        <textarea class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
          id="comment" rows="2"
          placeholder="What's in your mind..?" required></textarea>
      </div>
      <button type="submit"
        class="inline-flex items-end py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
        Post comment
      </button>
    </form>

    <article class="p-6 text-base bg-white rounded-lg">

      <footer class="flex justify-between items-center">

        <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
            <img  class="mr-2 w-6 h-6 rounded-full"
            src="src/assets/profile.jpg" />
            Joanna David
          </p>
          <p class="text-sm text-gray-600">
            <time pubdate datetime="2024-02-08"title="February 8th, 2024">Feb. 8, 2024</time>
          </p>
        </div>

        <button id="dropdownCommentButton1" data-dropdown-toggle="dropdownComment1"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
        type="button">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
          </svg>
          <span class="sr-only">Comment Settings</span>
        </button>
            
        <div id="dropdownComment1"
        class="hidden z-10 w-36 rounded divide-y divide-gray-100 shadow">
          <ul class="py-1 text-sm text-gray-700"
          aria-labelledby="dropdownMenuIconHorizontalButton">
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100">Edit</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Remove</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Report</a>
            </li>
          </ul>
        </div>

      </footer>

      <p class="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis laoreet metus ac congue. Nulla at eleifend lectus. Duis tempus condimentum ligula, quis suscipit arcu sodales quis. Aenean eget lectus placerat, tincidunt dolor et, facilisis sem. Nulla ex lectus, blandit nec eros nec, feugiat rhoncus felis. Ut sit amet posuere tellus. Fusce commodo tortor finibus dolor tempus sollicitudin. Ut in maximus dui.
      </p>

      <div class="flex items-center mt-4 space-x-4">
        <button type="button"
        class="flex items-center text-sm text-gray-500 hover:underline font-medium">
          <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
          </svg>
          Reply
        </button>
      </div>

    </article>

    <hr />

    <article class="p-6 mb-3 mx-12 lg:ml-12 text-base rounded-lg">

      <footer class="flex justify-between items-center">

        <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
            <img  class="mr-2 w-6 h-6 rounded-full"
            src="src/assets/profile.jpg" />
            Joanna David
          </p>
          <p class="text-sm text-gray-600">
            <time pubdate datetime="2024-02-08"title="February 8th, 2024">Feb. 8, 2024</time>
          </p>
        </div>

        <button id="dropdownCommentButton1" data-dropdown-toggle="dropdownComment1"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
        type="button">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
          </svg>
          <span class="sr-only">Comment Settings</span>
        </button>
            
        <div id="dropdownComment1"
        class="hidden z-10 w-36 rounded divide-y divide-gray-100 shadow">
          <ul class="py-1 text-sm text-gray-700"
          aria-labelledby="dropdownMenuIconHorizontalButton">
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100">Edit</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Remove</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Report</a>
            </li>
          </ul>
        </div>

      </footer>

      <p class="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis laoreet metus ac congue. Nulla at eleifend lectus. Duis tempus condimentum ligula, quis suscipit arcu sodales quis. Aenean eget lectus placerat, tincidunt dolor et, facilisis sem.
      </p>

      <div class="flex items-center mt-4 space-x-4">
        <button type="button"
        class="flex items-center text-sm text-gray-500 hover:underline font-medium">
          <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
          </svg>
          Reply
        </button>
      </div>

    </article>

    <hr />

    <article class="p-6 text-base bg-white rounded-lg">

      <footer class="flex justify-between items-center">

        <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
            <img  class="mr-2 w-6 h-6 rounded-full"
            src="src/assets/profile.jpg" />
            Rafael Yap
          </p>
          <p class="text-sm text-gray-600">
            <time pubdate datetime="2024-02-08"title="February 8th, 2024">Feb. 8, 2024</time>
          </p>
        </div>

        <button id="dropdownCommentButton1" data-dropdown-toggle="dropdownComment1"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
        type="button">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
          </svg>
          <span class="sr-only">Comment Settings</span>
        </button>
            
        <div id="dropdownComment1"
        class="hidden z-10 w-36 rounded divide-y divide-gray-100 shadow">
          <ul class="py-1 text-sm text-gray-700"
          aria-labelledby="dropdownMenuIconHorizontalButton">
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100">Edit</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Remove</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Report</a>
            </li>
          </ul>
        </div>

      </footer>

      <p class="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis laoreet metus ac congue. Nulla at eleifend lectus. Duis tempus condimentum ligula, quis suscipit arcu sodales quis. Aenean eget lectus placerat, tincidunt dolor et, facilisis sem. Nulla ex lectus, blandit nec eros nec, feugiat rhoncus felis. Ut sit amet posuere tellus. Fusce commodo tortor finibus dolor tempus sollicitudin. Ut in maximus dui.
      </p>

      <div class="flex items-center mt-4 space-x-4">
        <button type="button"
        class="flex items-center text-sm text-gray-500 hover:underline font-medium">
          <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
          </svg>
          Reply
        </button>
      </div>

    </article>

    <hr />

    <article class="p-6 text-base bg-white rounded-lg">

      <footer class="flex justify-between items-center">

        <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
            <img  class="mr-2 w-6 h-6 rounded-full"
            src="src/assets/profile.jpg" />
            Gabriel Parente
          </p>
          <p class="text-sm text-gray-600">
            <time pubdate datetime="2024-02-08"title="February 8th, 2024">Feb. 8, 2024</time>
          </p>
        </div>

        <button id="dropdownCommentButton1" data-dropdown-toggle="dropdownComment1"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
        type="button">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
          </svg>
          <span class="sr-only">Comment Settings</span>
        </button>
            
        <div id="dropdownComment1"
        class="hidden z-10 w-36 rounded divide-y divide-gray-100 shadow">
          <ul class="py-1 text-sm text-gray-700"
          aria-labelledby="dropdownMenuIconHorizontalButton">
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100">Edit</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Remove</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Report</a>
            </li>
          </ul>
        </div>

      </footer>

      <p class="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis laoreet metus ac congue.
      </p>

      <div class="flex items-center mt-4 space-x-4">
        <button type="button"
        class="flex items-center text-sm text-gray-500 hover:underline font-medium">
          <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
          </svg>
          Reply
        </button>
      </div>

    </article>

    <hr />

    <article class="p-6 text-base bg-white rounded-lg">

      <footer class="flex justify-between items-center">

        <div class="flex items-center">
          <p class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold">
            <img  class="mr-2 w-6 h-6 rounded-full"
            src="src/assets/profile.jpg" />
            Airelle Maagma
          </p>
          <p class="text-sm text-gray-600">
            <time pubdate datetime="2024-02-08"title="February 8th, 2024">Feb. 8, 2024</time>
          </p>
        </div>

        <button id="dropdownCommentButton1" data-dropdown-toggle="dropdownComment1"
        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50"
        type="button">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
          </svg>
          <span class="sr-only">Comment Settings</span>
        </button>
            
        <div id="dropdownComment1"
        class="hidden z-10 w-36 rounded divide-y divide-gray-100 shadow">
          <ul class="py-1 text-sm text-gray-700"
          aria-labelledby="dropdownMenuIconHorizontalButton">
            <li>
              <a href="#" class="block py-2 px-4 hover:bg-gray-100">Edit</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Remove</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-4 hover:bg-gray-100">Report</a>
            </li>
          </ul>
        </div>

      </footer>

      <p class="text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis laoreet metus ac congue.
      </p>

      <div class="flex items-center mt-4 space-x-4">
        <button type="button"
        class="flex items-center text-sm text-gray-500 hover:underline font-medium">
          <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
          </svg>
          Reply
        </button>
      </div>

    </article>

  </section>
  </div>
  </div>
  </>
  )
}