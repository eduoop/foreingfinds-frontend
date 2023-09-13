'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React from 'react'
import { LuLogOut } from "react-icons/lu"
import { useGlobalUserContext } from '@/app/contexts/User/UserContext';

const LogoutUserDropdown = () => {

    const { singout } = useGlobalUserContext()

    const logout = async () => {
        const token = localStorage.getItem("authToken")
        singout(token)
    }

    return (
        <DropdownMenu.Item onClick={logout} className='cursor-pointer p-3 duration-200 hover:bg-primaryGray outline-none group rounded-bl-md rounded-br-md'>
            <h2 className='flex items-center h-full gap-3 duration-200 group-hover:text-primaryOrange'>
                <LuLogOut className="w-[18px] h-[18px]" />
                <h2 className='font-roboto font-[400]'>Sair</h2>
            </h2>
        </DropdownMenu.Item>
    )
}

export default LogoutUserDropdown