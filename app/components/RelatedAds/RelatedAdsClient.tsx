"use client"
import { Ad } from '@/models/Ad';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import AdRelated from '../Cards/AdRelated';
import styled from 'styled-components';

type Props = {
    categoryId: number;
    subcategoryId: number;
    price: number;
    adId: number;
}

const baseUrl = process.env.BASE_URL

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const limit = 10

const getRelatedAds = async (categoryId: number, subcategoryId: number, price: number, adId: number) => {
    const res = await fetch(`${baseUrl}/related-ads/${categoryId}?subcategoryId=${subcategoryId}&limit=${limit}&currentAdPrice=${price}&adId=${adId}`)
    const data: Ad[] = await res.json()
    const filterData = data.filter(data => data !== null)
    return filterData
}

const StyledCarousel = styled(Carousel)`
        li {
            padding-right: 20px;
        }
    `

const RelatedAdsClient = ({ categoryId, subcategoryId, price, adId }: Props) => {

    const [adsFinder, setAdsFinder] = useState<Ad[]>([])

    const getRelatedAdsClient: any = async () => {
        let ads = await getRelatedAds(categoryId, subcategoryId, price, adId)
        setAdsFinder(ads)
    }

    useEffect(() => {
        getRelatedAdsClient()
    }, [adId])

    return (
        <div className='w-full'>
            {adsFinder.length > 0 &&
                <>
                    <div className='w-full mb-4 tablet:mb-32'>
                        <h1 className='text-[20px] font-medium text-neutralBlack w-full mb-5'>Relacionados</h1>
                        <StyledCarousel responsive={responsive} className='w-full'>
                            {adsFinder.map((ad, index) => (
                                <AdRelated key={index + ad.id} ad={ad} />
                            ))}
                        </StyledCarousel>
                    </div>
                </>
            }
        </div>
    )
}

export default RelatedAdsClient