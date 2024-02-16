import { Link } from 'react-router-dom'

// Parameters: Name, Position
export default function PostHeader(props) {

  const firstName = (props.name.split(' ')[0]).toLowerCase();
  const imagePath = `../src/assets/${firstName}.jpg`;

  return (
  <div className="flex">

  <div>
    <Link to={`/user/${firstName}`}><img className="object-contain w-10 h-10 rounded-full shadow" src={imagePath} /></Link>
  </div>

  <div className="flex items-center">
    <Link to={`/user/${firstName}`}><h2 className="text-lg mx-2 font-semibold text-gray-900">{`${props.name}`}</h2></Link>
    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded border border-purple-400">{props.position}</span>
  </div>

  </div>
  )
}