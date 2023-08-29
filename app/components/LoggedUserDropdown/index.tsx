"use client"
import React, { ReactNode } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BiUser } from "react-icons/bi"
import { BsViewList } from "react-icons/bs"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import LogoutUserDropdown from '../Buttons/LogoutUserDropdown';

type Props = {
  children: ReactNode
}

const LoggedUserDropdown = ({ children }: Props) => {


  const router = useRouter()

  const redirect = (to: string) => {
    router.replace(`${to}`)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='shadow-lg rounded-md w-[300px] bg-white'>
          <DropdownMenu.Item onClick={() => redirect("profile")} className='cursor-pointer p-3 duration-200 hover:bg-primaryGray outline-none group rounded-tl-md rounded-tr-md'>
            <div className='flex items-center gap-3 duration-200 group-hover:text-primaryOrange'>
              <BiUser className="w-[18px] h-[18px]" />
              <h2 className='font-roboto font-[400]'>Meu perfil</h2>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className='cursor-pointer p-3 duration-200 hover:bg-primaryGray outline-none group'>
            <Link href="/" className='flex items-center gap-3 duration-200 group-hover:text-primaryOrange'>
              <BsViewList className="w-[18px] h-[18px]" />
              <h2 className='font-roboto font-[400]'>Meus anuúncios</h2>
            </Link>
          </DropdownMenu.Item>
          <LogoutUserDropdown />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default LoggedUserDropdown