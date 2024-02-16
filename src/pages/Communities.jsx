import { Link } from 'react-router-dom'
import CreatePost from '../components/post/CreatePost.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function Communities() {
  return (
  <>

  <Sidebar />
  <Searchbar />
  
  <div class="p-4 sm:ml-64">
  <div class="grid grid-cols-3 gap-4 mb-4">

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./msc" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/organizations/msc.png" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Microsoft Student Community</h5>
          <p class="mb-3 font-normal text-gray-700">We are Lasallian student leaders who turn technology into absolute passion.</p>
        </div>
      </Link>
    </div>

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./gdsc" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/organizations/gdsc.jpg" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Google Developer Student Clubs De La Salle University</h5>
          <p class="mb-3 font-normal text-gray-700">A community emerging technologies with Google to solve real-world problems for our communities and local businesses.</p>
        </div>
      </Link>
    </div>

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./csg" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/organizations/csg.jpg" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">College of Computer Studies</h5>
          <p class="mb-3 font-normal text-gray-700">The official page of the De La Salle University Computer Studies Government (CSG).</p>
        </div>
      </Link>
    </div>

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./is" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/organizations/is.jpg" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Investors' Society</h5>
          <p class="mb-3 font-normal text-gray-700">Special interest organization that aims to help introduce the many forms of investment to Lasallians.</p>
        </div>
      </Link>
    </div>

    <div class="flex items-center justify-center h-100 rounded">
      <Link to="./lscs" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="./src/assets/organizations/lscs.png" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">La Salle Computer Society</h5>
          <p class="mb-3 font-normal text-gray-700">Living Yesterday's Vision, Setting Today's Trends, Inspiring Tomorrow's Leaders.</p>
        </div>
      </Link>
    </div>

  </div>
  </div>
  
  </>
  )
}