"use client"
import { FilterFistName } from '@/utils/FilterFistName'
import React from 'react'
import { FaUserLarge } from 'react-icons/fa6'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import LoggedUserDropdown from '../LoggedUserDropdown'
import { useGlobalUserContext } from '@/app/contexts/User/UserContext'

const LoggedUser = () => {

  const { user } = useGlobalUserContext()

  const userSurname = user ? user.surname : ""

  return (
    <LoggedUserDropdown>
      <div className='h-full flex items-center w-full'>
        {user &&
          <div className='rounded-full py-1 px-1 flex items-center border-neutralBlack border cursor-pointer group duration-200 hover:border-primaryOrange gap-2'>
            {user.avatar ?
              <div className='flex gap-2 items-center group-hover:text-primaryOrange duration-200'>
                <div className='w-[40px] h-[40px] tablet:w-[32px] tablet:h-[32px]'>
                  <img src={user.avatar.file_url} className='h-full w-full object-cover rounded-full' />
                </div>
                <h2 className='font-roboto max-w-[200px] overflow-hidden hidden tablet:block'>{FilterFistName(userSurname)}</h2>
              </div>
              :
              <div className='flex gap-2 items-center group-hover:text-primaryOrange duration-200'>
                <div className='w-[40px] h-[40px] tablet:w-[32px] tablet:h-[32px] flex items-center justify-center bg-weakGray rounded-full'>
                  <FaUserLarge className="w-[25px] text-neutralBlack" />
                </div>
                <h2 className='font-roboto max-w-[200px] overflow-hidden hidden tablet:block'>{FilterFistName(userSurname)}</h2>
              </div>
            }
            <MdOutlineKeyboardArrowDown className="w-[25px] h-[25px] hidden tablet:block text-primaryGraffiti group-hover:text-primaryOrange duration-200"/>
          </div>
        }
      </div>
    </LoggedUserDropdown>

  )
}

export default LoggedUser