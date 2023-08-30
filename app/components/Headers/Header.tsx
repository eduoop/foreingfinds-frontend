"use client"
import React, { useEffect, useState } from 'react'
import { Container } from '../Container'
import Logo from '@/assets/logo.png'
import Image from 'next/image'
import { Search } from '../Searchs/Search'
import LoggedUser from '../LoggedUser'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Header = () => {

  const hiddenIn = ['login', 'complete-register', 'forgot-password', 'register']
  const currentPage = usePathname();

  const currentPageWithoutBar = currentPage.replace("/", "")

  const render = !hiddenIn.includes(currentPageWithoutBar)

  return (
    <>
      {render &&
        <div className='h-[80px] border-b-2 border-primaryGray flex items-center py-[16px]'>
          <Container>
            <div className='w-full h-full items-center flex justify-start gap-3 tablet:gap-0 tablet:justify-between'>
              <div className='flex items-center gap-4 w-full tablet:w-fit laptop:w-full'>
                <Link href="/">
                  <Image alt='logo' src={Logo} className='w-12 cursor-pointer' />
                </Link>
                <Search />
              </div>
              <div className='h-full flex items-center gap-2'>
                <LoggedUser />
                <Link href="/new-ad" className='rounded-full py-2 px-5 bg-primaryOrange text-white duration-200 hover:bg-orange-700/90 font-roboto hidden tablet:block'>Anunciar</Link>
              </div>
            </div>
          </Container>
        </div>
      }
    </>

  )
}

export default Header