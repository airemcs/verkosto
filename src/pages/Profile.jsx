import { Link } from 'react-router-dom'
import PostHeader from '../components/post/PostHeader.jsx'
import CreatePost from '../components/post/CreatePost.jsx'
import MiniPost from '../components/post/MiniPost.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Searchbar from '../components/Searchbar'


export default function ProfilePage(){
    return(
    <> 
        <div>
            <Sidebar />
            <Searchbar />
            <PostHeader />
            <CreatePost />
            <MiniPost />
        </div>
    
    </>
        
    )
}