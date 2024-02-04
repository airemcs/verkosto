export default function Navbar() {
  return (
  <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      {/* Logo */}
      <div>
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="src/assets/logo.png" className="h-8" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap">Verkosto</span>
        </a>
      </div>

      {/* Search Bar */}
      <div className="basis-1/2 relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:border-green-500" placeholder="Search..." />
      </div>

      {/* Sign Up */}
      <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Sign Up</button>

    </div>
  </nav>
  )
}