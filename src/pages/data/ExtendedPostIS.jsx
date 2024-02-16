import { Link } from 'react-router-dom'
import Comment from '../../components/post/Comment.jsx'
import CommentNest from '../../components/post/CommentNest.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import ExtendedPost from '../../components/post/ExtendedPost.jsx'

export default function ExtendedPostIS() {
    return(
    <> 
    <div className="sm:ml-64">

      <Sidebar />
      <Searchbar />
      <ExtendedPost name="Olivia Martinez" position="Investment Analyst" title="Invest in Your Future: Apply Today!" 
      days="4" tag1="Investors' Society" tag2="Recruitment" tag3="Financial Independency" content="Invest in your future with DLSU Investors' Society! Whether you're a seasoned trader or just starting to explore the world of finance, we've got the resources and support you need to succeed. Applications are now open for students eager to learn, grow, and make smart investment decisions. Join us and embark on a journey to financial literacy and prosperity!" 
      likes="127" dislikes="2" comments="4" />

    </div>

    <div className="sm:ml-64">
    <div className="w-full mx-5 my-10">
    <div className=" max-w-7xl mx-auto my-2 p-4 border border-gray-400 rounded-lg shadow-md">
    <section>

      <div class="flex justify-between items-center mb-5">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900">Discussion (4)</h2>
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

      <Comment name="Dylan Taylor" date="February 12, 2024" content="Hey, are the applications open cross colleges?" />
      <CommentNest name="Olivia Martinez" date="February 12, 2024" content="Dylan! Yup, you can apply from any college within DLSU." />
      <hr />

      <Comment name="Ethan Johnson" date="February 12, 2024" content="Do I need to submit any resumes?" />
      <CommentNest name="Olivia Martinez" date="February 13, 2024" content="No need Ethan! Just make sure to answer the application form and we'll head to the interview!" />
      <hr />
        
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