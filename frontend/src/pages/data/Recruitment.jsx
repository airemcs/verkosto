import { Link } from 'react-router-dom'
import MiniPost from '../../components/post/MiniPost.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import Sidebar from '../../components/Sidebar.jsx'

export default function Recruitment() {
  return (
  <>

  <Sidebar />
  <Searchbar />

  <div className="sm:ml-64">
    <MiniPost id="005" name="Olivia Martinez" position="Investment Analyst" title="Invest in Your Future: Apply Today!" 
    days="4" tag1="Investors' Society" tag2="Recruitment" tag3="Financial Independency" content="Invest in your future with DLSU Investors' Society! Whether you're a seasoned trader or just starting to explore the world of finance, we've got the resources and support you need to succeed. Applications are now open for students eager to learn, grow, and make smart investment decisions. Join us and embark on a journey to financial literacy and prosperity!" 
    likes="127" dislikes="2" comments="4" />

    <MiniPost id="002" name="Jeff Kim" position="Program Manager" title="Empower Innovation: Apply to DLSU MSC!" 
    days="7" tag1="Microsoft Student Community" tag2="Recruitment" tag3="Event" content="Get ready to unleash your creativity with DLSU Microsoft Student Community! From coding workshops to AI hackathons, we're here to help you harness the power of Microsoft technologies and bring your ideas to life. Applications are open for aspiring tech enthusiasts who want to dive into the world of innovation. Join us and let's build the future together, one line of code at a time!" 
    likes="11" dislikes="0" comments="1" />

    <MiniPost id="006" name="Airelle Maagma" position="President" title="Join Our Data Science Community!" 
    days="7" content="Are you passionate about leveraging data to drive innovation and solve complex challenges? Look no further! The Data Science Community is seeking talented individuals like you to join our dynamic team.    "
    likes="24" dislikes="0" comments="2" tag1="Microsoft Student Community" tag2="Recruitment" tag3="Limited Time" />

    <MiniPost id="003" name="Dylan Taylor" position="Research Assistant" title="Shape the Future: Apply to CCS Today!" 
    days="14" tag1="College of Computer Studies" tag2="Recruitment" tag3="Excellence" content="Dreaming of a career in tech? Make it a reality with the College of Computer Studies at DLSU! Our cutting-edge programs and world-class faculty provide the perfect environment for aspiring computer scientists and engineers to thrive. Applications are open for students eager to explore the endless possibilities of technology and innovation. Join us and let's shape the future of computing together!" 
    likes="301" dislikes="1" comments="0" />

    <MiniPost id="004" name="Aiden Nguyen" position="Android Development Lead" title="Create with Google: Apply Now!" 
    days="8" tag1="Google Developer Student Club" tag2="Recruitment" tag3="Event" content="Calling all future developers, innovators, and problem solvers! DLSU Google Developer's Student Club is your gateway to the world of Google technologies and beyond. Whether you're passionate about Android apps, machine learning, or web development, we've got something for you. Applications are now open for students ready to explore, learn, and create with Google. Join us and let's code the future together!" 
    likes="15" dislikes="0" comments="1" />

    <MiniPost id="001" name="Ethan Johnson" position="Vice President" title="Code Your Future: Applications Now Open!" 
    days="2" content="Are you passionate about technology and eager to make an impact? Look no further! La Salle Computer Society is calling all aspiring developers, designers, and tech enthusiasts to join our vibrant community. As a member, you'll gain access to exclusive workshops, hackathons, and networking events, where you can sharpen your skills and collaborate on exciting projects. Whether you're a seasoned coder or just getting started, there's a place for you here! Our society is dedicated to fostering innovation, creativity, and collaboration among students who share a common interest in technology. From coding competitions to guest speaker series, we offer a wide range of opportunities for members to expand their knowledge, build their portfolios, and connect with industry professionals. Whether you're passionate about web development, data science, or artificial intelligence, you'll find like-minded peers and mentors to support you every step of the way. In addition to technical skills, La Salle Computer Society places a strong emphasis on personal and professional development. Through leadership workshops, resume building sessions, and mentorship programs, we empower our members to become well-rounded individuals poised for success in their careers. Our alumni network spans across various industries, providing invaluable insights and opportunities for current members to explore. Ready to take the next step in your tech journey? Complete our registration form now to unlock a world of opportunities. Join La Salle Computer Society and let's shape the future of technology together!"
    likes="18" dislikes="0" comments="2" tag1="La Salle Computer Society" tag2="Recruitment" tag3="Limited Time" />
  </div>

  </>
  )
}