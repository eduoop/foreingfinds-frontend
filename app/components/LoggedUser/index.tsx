import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { FilterFistName } from '@/utils/FilterFistName'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'
import { FaUserLarge } from 'react-icons/fa6'

const LoggedUser = async () => {

  const session = await getServerSession(nextAuthOptions)

  const userName = session && FilterFistName(session.user.name)

  return (
    <div className='h-full flex items-center'>
      {session &&
        <div className='rounded-full py-1 px-2 flex items-center border-neutralBlack border cursor-pointer group duration-200
        hover:border-primaryOrange'>
          {session.user.avatar && 1 < 0 ?
            <div className='flex gap-2 items-center group-hover:text-primaryOrange duration-200'>
              <div className='w-[32px] h-[32px]'>
                <img src={session.user.avatar.file_url} className='h-full w-full object-cover rounded-full' />
              </div>
              <h2>{userName}</h2>
            </div>
            :
            <div className='flex gap-2 items-center group-hover:text-primaryOrange duration-200'>
              <div className='w-[32px] h-[32px] flex items-center justify-center bg-weakGray rounded-full'>
                <FaUserLarge className="w-[25px] text-neutralBlack"/>
              </div>
              <h2>{userName}</h2>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default LoggedUser