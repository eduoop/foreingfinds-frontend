"use client"
import { File } from '@/models/File'
import React from 'react'
import Carousel, { ArrowProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

type Props = {
    images: File[];
}

export const AdImagesCarousel = ({ images }: Props) => {

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
        <div className='w-auto tablet:w-[100%] h-[100%] group'>
            <Carousel
                responsive={responsive}
                infinite={true}
                className='w-full'
            >
                {images.map((adImage, index) => (
                    <div key={adImage.id + index} className='h-[280px] tablet:h-[402px] relative'>
                        <div
                            style={{ backgroundImage: `url(${adImage.file_url})`, filter: "blur(8px)" }}
                            className='w-full h-full bg-gray-200 bg-cover bg-center'>
                        </div>
                        <img
                            draggable={false}
                            className='w-full object-contain max-h-[402px] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] right-[50%] z-10'
                            style={{ pointerEvents: "none" }}
                            src={adImage.file_url}
                            alt="ad image"
                        />
                    </div>


                ))}
            </Carousel>
        </div>
    )
}
