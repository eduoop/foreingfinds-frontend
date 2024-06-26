"use client"
import { Ad } from '@/models/Ad'
import React, { useState } from 'react'
import Carousel, { ArrowProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

import 'react-multi-carousel/lib/styles.css';
import { StyledCarousel } from './styles';
import FilterIntegerValueToReal from '@/utils/FilterIntegerValueToReal';
import Link from 'next/link';

type Props = {
  ad: Ad
}

interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string
}
interface CustomRightArrowProps extends ArrowProps {
  myOwnStuff: string
}

const AdSquare = ({ ad }: Props) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <div className='flex flex-col w-full h-full bg-white border-2 border-weakGray gap-2 shadow-lg cursor-pointer rounded-md'>
      <div className='w-auto tablet:w-[100%] h-[100%] tablet:h-[200px] group'>
        <StyledCarousel
          responsive={responsive}
          infinite={true}
          className='h-full rounded-t-md'
          customLeftArrow={<SlArrowLeft className="absolute h-full text-xl top-0 left-4 cursor-pointer text-white hidden group-hover:block" />}
          customRightArrow={<SlArrowRight className="absolute h-full text-xl top-0 right-4 cursor-pointer text-white hidden group-hover:block" />}
          renderArrowsWhenDisabled
        >
          {ad.files.map((adImage) => (
            <Link href={`/ad/${ad.id}`} className='flex flex-col w-full h-full bg-white border-2 border-weakGray gap-2 shadow-lg cursor-pointer rounded-md'>
              <img
                draggable={false}
                className='object-cover w-full h-full select-none rounded-t-md'
                style={{ pointerEvents: "none" }}
                src={adImage.file_url}
                alt="ad image"
              />
            </Link>
          ))}
        </StyledCarousel>
      </div>

      <Link href={`/ad/${ad.id}`} className='flex flex-col p-3'>
        <div>
          {ad.previous_price ?
            <small className='text-gray-500 line-through'>{FilterIntegerValueToReal(ad.previous_price)}</small>
            :
            <div className='h-[15px]' />
          }
          <h3 className='text-primaryGraffiti text-md tablet:text-2xl leading-[22px]'>{FilterIntegerValueToReal(ad.price)}</h3>
        </div>
        <h2 className='text-primaryGraffiti text-md font-light'>{ad.title}</h2>
      </Link>
    </div>
  )
}

export default AdSquare