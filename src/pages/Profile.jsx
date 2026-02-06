import React, {useState} from 'react'
import {useSelector} from 'react-redux'

const Profile = () => {

  // currentUser

  const {currentUser} = useSelector((state) => state.user)

  return (
    <div >
      <h1 className='text-5xl font-semibold italic ml-20 mt-10'>Hi!,{" " + currentUser?.username}</h1>


<div className='flex justify-center items-center'>
      <form className='flex flex-col gap-4 mt-8'>
        <input className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='headline'/>

        <input className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='summary'/>

        {/* Experience -> 4 fields */}

        <input className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='company'/>

        <input className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='joining date'/>

        <input className='p-4 text-lg border-2 border-black outline-none rounded-lg'   type="text" placeholder='Last date'/>

        <input className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='description'/>

        {/* skills */}

        <input className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='skills'/>

        {/* Education -> 4 fields */}

        <input className='p-4 text-lg border-2 border-black outline-none rounded-lg'   type="text" placeholder='School Name'/>

        <input className='p-4 text-lg border-2 border-black outline-none rounded-lg' type="text" placeholder='session'/>

        <button className='p-4 text-lg bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600'>Save</button>

      </form>
      </div>
    </div>
  )
}

export default Profile
