import { Link } from 'react-router-dom'

export default function CreatePost() {
  
    return(
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-top px-6 py-8 mx-auto md:h-screen lg:py-0 bg-transparent border-1  border-gray-300">
          
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Create a Post</h1>
          <div class="flex items-center justify-between">
              <div class="flex items-start">
                  
              </div>

              <a href="#" class="text-sm font-bold text-primary-600 hover:underline text-green-600">DRAFTS</a>
            </div>
          <form className="max-w-md mx-auto">
            {/*Title Area*/}
            <div className="relative z-0 w-full mb-5 group">
                <input type="titleArea" name="titleArea" id="titleArea" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                <label htmlFor="titleArea" className=" peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
            </div>

            {/* Post Area*/}
            <div className="relative z-0 w-full mb-5 group">
            <textarea name="postArea" id="postArea" 
            className="block py-2.5 px-0 w-full h-40 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer " 
            placeholder=" " 
            required/>
            <label 
                htmlFor="postArea" 
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                Text
            </label>
            </div>
            
            
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                  Add to your post
              </div>

              <a href="#" class="text-sm font-bold text-primary-600 hover:underline text-green-600">DRAFTS</a>
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