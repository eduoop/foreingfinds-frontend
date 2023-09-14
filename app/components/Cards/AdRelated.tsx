"use client"
import { Ad } from '@/models/Ad'
import FilterIntegerValueToReal from '@/utils/FilterIntegerValueToReal'
import Link from 'next/link'
import React from 'react'

type Props = {
  ad: Ad
}

const AdRelated = ({ ad }: Props) => {
  return (
    <Link href={`/ad/${ad.id}`} className='group overflow-hidden'>
      <>
        <div className='w-[100%] h-[200px] relative'>
          <div
            className='w-full h-full bg-[#e5e5e5]'>
          </div>
          <img
            draggable={false}
            className='w-full h-full object-contain absolute translate-y-[50%] translate-x-[50%] bottom-[50%] right-[50%] z-10'
            style={{ pointerEvents: "none" }}
            src={ad.files[0].file_url}
            alt="ad image"
          />
        </div>

        <div>
          <h1 className='text-neutralBlack mt-3 group-hover:underline decoration-primaryOrange'>{ad.title}</h1>
          <h2 className='text-md tablet:text-xl text-neutralBlack font-medium group-hover:underline decoration-primaryOrange'>{FilterIntegerValueToReal(ad.price)}</h2>
        </div>
      </>
    </Link>

  )
}

export default AdRelated