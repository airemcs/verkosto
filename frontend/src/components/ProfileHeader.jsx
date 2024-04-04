import { Link } from 'react-router-dom'

export default function ProfileHeader() {
  return (
  <div className="flex">

    <div>
      <Link to="#"><img className="w-10 h-10 rounded-full shadow" src="/assets/profile.jpg" /></Link>
    </div>

    <div className="flex items-center">
      <Link to="#"><h2 className="text-lg mx-2 font-semibold text-gray-900">Adrian Cruz</h2></Link>
      <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded border border-purple-400">President</span>

      <p className="mt-3 text-gray-700 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis laoreet metus ac congue. Nulla at eleifend lectus. Duis tempus condimentum ligula, quis suscipit arcu sodales quis. Aenean eget lectus placerat, tincidunt dolor et, facilisis sem. Nulla ex lectus, blandit nec eros nec, feugiat rhoncus felis. Ut sit amet posuere tellus. Fusce commodo tortor finibus dolor tempus sollicitudin. Ut in maximus dui.
     </p>

     <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full border border-green-400">Taguig</span>


    
    </div>

    

  </div>
  )
}