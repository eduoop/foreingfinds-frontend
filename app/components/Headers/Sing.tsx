import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/assets/logo.png'

const Sing = () => {
    return (
        <div className='w-screen h-[80px] bg-white flex items-center justify-between px-10'>
            <Image alt='logo' src={Logo} className='w-12' />
            <Link href="" className='font-roboto text-blue-900 text-[12px]'>Precisa de ajuda?</Link>
        </div>
    )
}

export default Sing