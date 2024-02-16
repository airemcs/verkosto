import { Link } from 'react-router-dom'
import Comment from '../../components/post/Comment.jsx'
import CommentNest from '../../components/post/CommentNest.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import ExtendedPost from '../../components/post/ExtendedPost.jsx'

export default function ExtendedPostMSC() {
    return(
    <> 
    <div className="sm:ml-64">

      <Sidebar />
      <Searchbar />
      <ExtendedPost name="Aiden Nguyen" position="Android Development Lead" title="Create with Google: Apply Now!" 
      days="8" tag1="Google Developer Student Club" tag2="Recruitment" tag3="Event" content="Calling all future developers, innovators, and problem solvers! DLSU Google Developer's Student Club is your gateway to the world of Google technologies and beyond. Whether you're passionate about Android apps, machine learning, or web development, we've got something for you. Applications are now open for students ready to explore, learn, and create with Google. Join us and let's code the future together!" 
      likes="15" dislikes="0" comments="1" />

    </div>

    <div className="sm:ml-64">
    <div className="w-full mx-5 my-10">
    <div className=" max-w-7xl mx-auto my-2 p-4 border border-gray-400 rounded-lg shadow-md">
    <section>

      <div class="flex justify-between items-center mb-5">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Discussion (1)</h2>
      </div>

      <form>
        <div class="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200">
          <label for="comment" class="sr-only">Your Comment</label>
          <textarea class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
          id="comment" rows="2"
          placeholder="What's on your mind..?" required></textarea>
        </div>
        <button type="submit"
          class="inline-flex items-end py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-primary-800">
          Post Comment
        </button>
      </form>

      <Comment name="Maya Higa" date="February 8, 2024" content="Nice Aiden! I'll join soon!" />
        
    </section>
    </div>
    </div>

    </div>

    {/* <ExtendedPost name="" position="" title="" 
    day="" content="" 
    comments="" tag1="" tag2="" tag3="" /> */}

    </>
    )
}