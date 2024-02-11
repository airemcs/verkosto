import { Link } from 'react-router-dom'

export default function CreatePost() {
  
    return(
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-top px-6 py-8 mx-auto md:h-screen lg:py-0 bg-transparent border-1  border-gray-300">
          
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

          <div class="flex items-center justify-between">
              <div class="flex items-start">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Create a Post</h1>
              </div>

              <a href="#" class="text-sm font-bold text-primary-600 hover:underline text-green-600">DRAFTS</a>
              
            </div>
          <form className="max-w-md mx-auto">
            
            {/*Title Area*/}
            <div className="relative z-0 w-full mb-5 group">
              <input type="titleArea" name="titleArea" id="titleArea" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="Title " required />
            </div>

            {/* Post Area*/}
            <div className="relative z-0 w-full mb-5 group">
            <textarea name="postArea" id="postArea" 
            className="block py-2.5 px-0 w-full h-40 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer " 
            placeholder="Text"  
            required/> 
            
            </div>
                        
              <div class="flex items-center space-x-44">
                <div class="flex items-start ">
                    Add to your post
                </div>

                <div class="flex items-end space-x-2">
                  <Link to="#" className="flex items-center p-0 text-gray-900 rounded-lg group">
                    <svg className="w- h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/>
                    </svg>
                  </Link>
                
                  <Link to="#" className="flex items-center p-0 text-gray-900 rounded-lg group">
                    <svg className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                    </svg>
                  </Link>

                  
                </div>
              </div>           
                      
            {/* Post */}
            <div className="w-full mt-5 mb-5">
              <Link to="/" type="submit" className="flex-1 mr-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >Post</Link>
              <Link to="/" type="submit" className="flex-1 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              > Save Draft</Link>
            </div>

        
          </form>
        </div>
        </div>
        </div>
      </section>
    )
}