import { Link } from 'react-router-dom'
import Comment from '../../components/post/Comment.jsx'
import CommentNest from '../../components/post/CommentNest.jsx'
import Sidebar from '../../components/Sidebar.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import ExtendedPost from '../../components/post/ExtendedPost.jsx'

export default function ExtendedPostLSCS() {
    return(
    <> 
    <div className="sm:ml-64">

      <Sidebar />
      <Searchbar />
      <ExtendedPost name="Ethan Johnson" position="Technical Lead" title="Code Your Future: Applications Now Open!" 
      days="2" content="Are you passionate about technology and eager to make an impact? Look no further! La Salle Computer Society is calling all aspiring developers, designers, and tech enthusiasts to join our vibrant community. As a member, you'll gain access to exclusive workshops, hackathons, and networking events, where you can sharpen your skills and collaborate on exciting projects. Whether you're a seasoned coder or just getting started, there's a place for you here! Our society is dedicated to fostering innovation, creativity, and collaboration among students who share a common interest in technology. From coding competitions to guest speaker series, we offer a wide range of opportunities for members to expand their knowledge, build their portfolios, and connect with industry professionals. Whether you're passionate about web development, data science, or artificial intelligence, you'll find like-minded peers and mentors to support you every step of the way. In addition to technical skills, La Salle Computer Society places a strong emphasis on personal and professional development. Through leadership workshops, resume building sessions, and mentorship programs, we empower our members to become well-rounded individuals poised for success in their careers. Our alumni network spans across various industries, providing invaluable insights and opportunities for current members to explore. Ready to take the next step in your tech journey? Complete our registration form now to unlock a world of opportunities. Join La Salle Computer Society and let's shape the future of technology together!"
      likes="18" dislikes="0" comments="2" tag1="La Salle Computer Society" tag2="Recruitment" tag3="Limited Time" />

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

      <Comment name="Maya Higa" date="February 14, 2024" content="Hey! This sounds great! When is the deadline?" />
      <CommentNest name="Ethan Johnson" date="February 14, 2024" content="Hello! I'm glad you're interested. It'll end on the 28th!" />
        
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