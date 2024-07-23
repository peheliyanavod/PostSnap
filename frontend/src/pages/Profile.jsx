import sample from '../assets/PostSnap Logo.png';

const Profile = () => {
  return (
    <div className="flex flex-col items-center space-y-4 bg-gray-200 m-10 max-w-md p-6 rounded-lg">
        <div>
            <img src={sample} alt="" className='w-32 h-32 rounded-full object-cover'/>
        </div>
        <div>
            <h2>Name</h2>
        </div>
    </div>
  )
}

export default Profile;