import React from 'react'
import ProfileSection from '../components/ProfileSection';
import CreatePost from '../components/CreatePost';
import Feed from '../components/Feed';

const HomePage = () => {
  return (
    <div className='flex justify-center gap-30'>
      {/* left section */}
      <div>
        <ProfileSection />
      </div>

       {/* right section */}
      <div>
         <CreatePost />
         <Feed />
      </div>

    </div>
  )
}

export default HomePage
