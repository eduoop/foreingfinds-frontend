import { Ad } from '@/models/Ad'
import React from 'react'
import AdSquare from '../Cards/AdSquare'

const baseUrl = process.env.BASE_URL

const getAds = async () => {
    const res = await fetch(`${baseUrl}/products`)
    const ads: Ad[] = await res.json()
    return ads
}

export default async function ListAdsHome() {

    const ads = await getAds()

    return (
        <div className='w-full  mb-16'>
            <div className='grid gap-2 tablet:gap-4 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5'>
                {ads.map((ad) => (
                    <AdSquare ad={ad} />
                ))}
            </div>
        </div>

    )
}

