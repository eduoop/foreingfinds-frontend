import React from 'react'
import { Container } from '../Container'
import Logo from '@/assets/logo.png'
import Image from 'next/image'
import { Search } from '../Searchs/Search'
import LoggedUser from '../LoggedUser'

const Header = () => {
  return (
    <div className='h-[80px] border-b-2 border-primaryGray flex items-center py-[16px]'>
      <Container>
        <div className='w-full h-full items-center flex justify-between'>
          <div className='flex items-center gap-4'>
            <Image alt='logo' src={Logo} className='w-12 cursor-pointer' />
            <Search />
          </div>
          <div className='h-full flex items-center'>
            <LoggedUser/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header