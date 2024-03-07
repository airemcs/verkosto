import { Link } from 'react-router-dom'
import CreatePost from '../components/post/CreatePost.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function Topics() {
  return (
  <>

  <Sidebar />
  <Searchbar />
  
  <div class="p-4 sm:ml-64">
  <div class="grid grid-cols-3 gap-4 mb-4">

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./events" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/topics/event.png" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Events</h5>
          <p class="mb-3 font-normal text-gray-700">These serve as venues for gatherings, offering spaces for various activities, such as conferences, seminars, celebrations, and workshops.</p>
        </div>
      </Link>
    </div>

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./excellence" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/topics/star.png" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Excellence</h5>
          <p class="mb-3 font-normal text-gray-700">These are where excellence is found and cultivated.</p>
        </div>
      </Link>
    </div>

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./financial-independence" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/topics/money.png" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Financial Independence</h5>
          <p class="mb-3 font-normal text-gray-700">These are where financial independence is achieved.</p>
        </div>
      </Link>
    </div>

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./limited-time" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/topics/timer.png" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Limited Time</h5>
          <p class="mb-3 font-normal text-gray-700">These are where opportunities have expiration dates.</p>
        </div>
      </Link>
    </div>

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./recruitment" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/topics/recruitment.png" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Recruitment</h5>
          <p class="mb-3 font-normal text-gray-700">These are where talent is sought and extracted.</p>
        </div>
      </Link>
    </div>

  </div>
  </div>
  
  </>
  )
}