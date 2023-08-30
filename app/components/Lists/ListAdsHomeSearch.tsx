import { Ad } from '@/models/Ad'
import React from 'react'
import AdSquare from '../Cards/AdSquare'

type Props = {
    searchQuery: string
}

const baseUrl = process.env.BASE_URL

const getAdsSearch = async (searchQuery: string) => {
    const res = await fetch(`${baseUrl}/products?search=${searchQuery}`)
    const ads: Ad[] = await res.json()
    return ads
}

export default async function ListAdsHomeSearch({ searchQuery }: Props) {

    const ads = await getAdsSearch(searchQuery)

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

