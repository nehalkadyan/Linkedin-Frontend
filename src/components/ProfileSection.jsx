import React from 'react'
import {useSelector} from 'react-redux';

const ProfileSection = () => {

    // currentUser 

    const {currentUser} = useSelector((state) => state.user);

  return (
    <div className='border-2 flex flex-col items-center border-black rounded-lg p-10'>
       <div className='flex items-center gap-2'>
        <img
          className="w-17 ml-[-18px]"
          src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
          alt="user_profile"
        />
         <div>
             <h2 className='font-semibold text-lg'>{currentUser?.username}</h2>
         </div>
       </div>

       {/* profile menu items */}

{/* mt - margin top */}
       <div className='mt-6'>
          <ul className='text-2xl font-semibold flex flex-col gap-3'>
            <li className='cursor-pointer'>Profile Views</li>
            <li className='cursor-pointer'>Account settings</li>
            <li className='cursor-pointer'>Upgrade to Premium</li>
          </ul>
       </div>
    </div>
  )
}

export default ProfileSection
