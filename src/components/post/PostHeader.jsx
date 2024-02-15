import { Link } from 'react-router-dom'

// Parameters: Name, Position
export default function PostHeader(props) {
  return (
  <div className="flex">

  <div>
    <Link to="user/adrianxo"><img className="w-10 h-10 rounded-full shadow" src="src/assets/profile.jpg" /></Link>
  </div>

  <div className="flex items-center">
    <Link to="user/{props.name}"><h2 className="text-lg mx-2 font-semibold text-gray-900">{props.name}</h2></Link>
    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded border border-purple-400">{props.position}</span>
  </div>

  </div>
  )
}