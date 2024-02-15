import { Link } from 'react-router-dom'

export default function ProfileHeader() {
  return (
  <div className="flex">

    <div>
      <Link to="#"><img className="w-96 h-96 rounded-full shadow mx-10" src="src/assets/profile.jpg" /></Link>
    </div>

    <div className="flex flex-col justify-end py-10">

      <Link to="#"><h2 className="text-3xl mx-2  font-semibold text-gray-900 ">Adrian Cruz</h2></Link>
      <h2 className="text-x1 mx-2  font-semibold text-gray-900 py-1 ">President</h2>
      <h2 className="text-base mx-2  text-gray-900 py-1">Taguig</h2>
      <h2 className="text-sm mx-2  text-gray-900 py-1">Social Medias:</h2>
      <div className="flex">
      <Link to="x.com"><img className="w-5 h-5 mx-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/800px-X_logo_2023.svg.png"/></Link>
      <Link to="facebook.com"><img className="w-5 h-5 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/800px-2023_Facebook_icon.svg.png"/></Link>
    </div>
    

    
    </div>

    

  </div>
  )
}