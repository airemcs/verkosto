import { Link } from 'react-router-dom'
import ExtendedPost from '../components/post/ExtendedPost.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Searchbar from '../components/Searchbar.jsx'


export default function ExtendedPostPage(){
    return(
    <> 
        <div>
            <Sidebar />
            <Searchbar />
            <ExtendedPost />
        </div>
    
    </>
        
    )
}