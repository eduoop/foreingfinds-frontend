import React from 'react'
import Banner from "@/assets/banner ff.jpg"
import Image from 'next/image'
import Link from 'next/link'
export const BannersClient = () => {
  return (
    <Link href="new-ad" className='w-full rounded-md bg-slate-600/25 flex justify-center'>
      <Image src={Banner} alt="banner" width={860} />
    </Link>
  )
}
