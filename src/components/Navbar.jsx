import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
  <nav className="fixed w-full z-20 top-0 start-0 border-b bg-gray-50">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      
      {/* Search Bar */}
      <div className="basis-3/4 relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500" placeholder="Search..." />
      </div>

      {/* Sign Up */}
      <Link to="/signup" type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Sign Up</Link>

    </div>
  </nav>
  )
}