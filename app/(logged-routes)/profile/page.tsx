import AccountData from '@/app/components/Profile/AccountData'
import React from 'react'

const Profile = () => {
  return (
    <div className='w-screen flex justify-center'>
      <div className='w-[800px] p-1 md:p-0 md:w-screen flex flex-col md:items-center mt-7'>
        <div className='w-full flex justify-start md:w-[90%] flex-col'>
          <h1 className='text-4xl font-normal text-primaryGraffiti'>Minha conta</h1>
          <small className='font-normal text-primaryGraffiti'>Configure a sua conta</small>
        </div>
        <div className='mb-20 w-full md:w-[90%]'>
          <AccountData />
        </div>
      </div>
    </div>
  )
}

export default Profile