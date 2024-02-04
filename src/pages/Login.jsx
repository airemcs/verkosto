import { Link } from 'react-router-dom'

export default function Signup() {
  return (
  <section className="bg-gray-50">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

    {/* Logo */}
    <Link to="/signup" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
    <img className="w-8 h-8 mr-2" src="src/assets/logo.png" alt="logo" />Verkosto</Link>

    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Login New Account</h1>

      <form className="max-w-md mx-auto">

        {/* Email Address */}
        <div className="relative z-0 w-full mb-5 group">
            <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">DLSU Email Address</label>
        </div>

        {/* Password */}
        <div className="relative z-0 w-full mb-5 group">
            <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-start">
              
              <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
              </div>

              <div class="ml-3 text-sm">
                <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
              </div>

          </div>

          <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Forgot Password?</a>
        </div>

        {/* Login */}
        <div className="w-full mt-5 mb-5">
          <Link to="/" type="submit" className="block w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center">Login</Link>
        </div>

        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        Don't Have an Account Yet? <a href="#" class="font-medium text-primary-600 hover:underline">Sign Up</a>!
        </p>
      
      </form>

    </div>
    </div>

    </div>
  </section>
  )
}