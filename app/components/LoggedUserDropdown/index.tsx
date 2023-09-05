"use client"
import React, { ReactNode } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BiUser } from "react-icons/bi"
import { BsViewList } from "react-icons/bs"
import { GoPlusCircle } from "react-icons/go"
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
        <DropdownMenu.Content className='shadow-lg rounded-md w-[300px] bg-white z-10'>
          <DropdownMenu.Item onClick={() => redirect("/profile")} className='cursor-pointer p-3 duration-200 hover:bg-primaryGray outline-none group rounded-tl-md rounded-tr-md'>
            <div className='flex items-center gap-3 duration-200 group-hover:text-primaryOrange'>
              <BiUser className="w-[18px] h-[18px]" />
              <h2 className='font-roboto font-[400]'>Meu perfil</h2>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => redirect("/my-ads")} className='cursor-pointer p-3 duration-200 hover:bg-primaryGray outline-none group'>
            <div className='flex items-center gap-3 duration-200 group-hover:text-primaryOrange'>
              <BsViewList className="w-[18px] h-[18px]" />
              <h2 className='font-roboto font-[400]'>Meus anúncios</h2>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => redirect("/new-ad")} className='cursor-pointer p-3 duration-200 hover:bg-primaryGray outline-none group'>
            <div className='flex items-center gap-3 duration-200 group-hover:text-primaryOrange'>
              <GoPlusCircle className="w-[18px] h-[18px]" />
              <h2 className='font-roboto font-[400]'>Novo anúncio</h2>
            </div>
          </DropdownMenu.Item>
          <LogoutUserDropdown />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default LoggedUserDropdown