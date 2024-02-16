import { Link } from 'react-router-dom'
import Comment from '../../components/post/Comment.jsx'
import CommentNest from '../../components/post/CommentNest.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import ExtendedPostEditTemporary from '../../components/post/ExtendedPostEditTemporary.jsx'

export default function ExtendedPostDSCEdit() {
    return(
    <> 
    <div className="sm:ml-64">

      <Sidebar />
      <Searchbar />
      <ExtendedPostEditTemporary name="Airelle Maagma" position="President" title="Join Our Data Science Community!" 
      days="7" content="Are you passionate about leveraging data to drive innovation and solve complex challenges? Look no further! The Data Science Community is seeking talented individuals like you to join our dynamic team. The Data Science Community is a vibrant hub for data enthusiasts, aspiring data scientists, and seasoned professionals alike. We're dedicated to fostering collaboration, sharing knowledge, and exploring the latest trends and technologies in data science. We're currently recruiting passionate individuals who are eager to make an impact through data-driven insights. Whether you're a seasoned data scientist or just starting your journey in the field, there's a place for you here. Ready to embark on your data science journey with us? Fill out our registration form now to join our growing community of data enthusiasts. Don't miss out on this opportunity to connect with peers, expand your knowledge, and make a difference through data science."
      likes="24" dislikes="0" comments="2" tag1="Microsoft Student Community" tag2="Recruitment" tag3="Limited Time" isAccount="1" />

    </div>

    <div className="sm:ml-64">
    <div className="w-full mx-5 my-10">
    <div className=" max-w-7xl mx-auto my-2 p-4 border border-gray-400 rounded-lg shadow-md">
    <section>

      <div class="flex justify-between items-center mb-5">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Discussion (2)</h2>
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

      <Comment name="Maya Higa" date="February 10, 2024" content="Is the organization secured by DLSU?" />
      <CommentNest name="Airelle Maagma" date="February 10, 2024" content="Hey Maya! It isn't YET, but we're getting the paperwork done!" isAccount="1" />
        
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