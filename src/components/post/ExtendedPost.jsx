import Comment from './Comment.jsx'
import CommentNest from './CommentNest.jsx'
import PostHeader from './PostHeader.jsx'
import PostContent from './PostContent.jsx'

// Parameters: Name, Position
// Parameters: Title, Day Age, Tag, Content
export default function ExtendedPost(props) {
  return (
  <>
  <div className="w-full mx-5 my-10">

  <div className=" max-w-7xl mx-auto  my-2 p-4 border border-gray-400 rounded-lg shadow-md">
    <PostHeader name={props.name} position={props.position} />
    <PostContent title={props.title} day={props.day} tag={props.tag} content={props.content} />
  </div>

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

    <Comment name="" date="" content=""/>
    <CommentNest name="" date="" content="" />
    <CommentNest name="" date="" content="" />
    <hr />

    <Comment name="" date="" content=""/>
    <hr />
    
    <Comment name="" date="" content=""/>
    <hr />

    <Comment name="" date="" content=""/>
    <hr />

  </section>
  </div>
  </div>
  </>
  )
}