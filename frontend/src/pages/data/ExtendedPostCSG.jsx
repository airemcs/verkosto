import { Link } from 'react-router-dom'
import Comment from '../../components/post/Comment.jsx'
import CommentNest from '../../components/post/CommentNest.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import ExtendedPost from '../../components/post/ExtendedPost.jsx'

export default function ExtendedPostCSG() {
    return(
    <> 
    <div className="sm:ml-64">

      <Sidebar />
      <Searchbar />
      <ExtendedPost name="Dylan Taylor" position="Research Assistant" title="Shape the Future: Apply to CCS Today!" 
      days="14" tag1="College of Computer Studies" tag2="Recruitment" tag3="Excellence" content="Dreaming of a career in tech? Make it a reality with the College of Computer Studies at DLSU! Our cutting-edge programs and world-class faculty provide the perfect environment for aspiring computer scientists and engineers to thrive. Applications are open for students eager to explore the endless possibilities of technology and innovation. Join us and let's shape the future of computing together!" 
      likes="301" dislikes="1" comments="0" />

    </div>

    <div className="sm:ml-64">
    <div className="w-full mx-5 my-10">
    <div className=" max-w-7xl mx-auto my-2 p-4 border border-gray-400 rounded-lg shadow-md">
    <section>

      <div class="flex justify-between items-center mb-5">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Discussion (0)</h2>
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