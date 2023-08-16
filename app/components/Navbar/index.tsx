'use client'
import React from 'react'
import { Container } from '../Container'
import { usePathname } from 'next/navigation'

export const Navbar = () => {

    const pathName = usePathname()

    console.log(pathName)

    const notRender = ['/login']

    return (
        <>
            {!notRender.includes(pathName) &&
                <nav className='w-screen p-4 bg-gray-800 fixed top-0 left-0 flex flex-col'>
                    <div>navbar</div>
                </nav>
            }
        </>
    )
}
