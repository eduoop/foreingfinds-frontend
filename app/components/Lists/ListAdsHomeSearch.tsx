import { Ad } from '@/models/Ad'
import React from 'react'
import AdSquare from '../Cards/AdSquare'

type Props = {
    searchQuery: string
}

export type Meta = {
    total: number,
    per_page: number,
    current_page?: number,
    last_page: number,
    first_page: number,
    first_page_url: string,
    last_page_url: string,
    next_page_url?: string,
    previous_page_url?: string,
}

type Data = {
    meta: Meta,
    data: Ad[]
}

const baseUrl = process.env.BASE_URL

const getAdsSearch = async (searchQuery: string) => {
    const res = await fetch(`${baseUrl}/products?search=${searchQuery}`)
    const data: Data = await res.json()
    const ads: Ad[] = data.data
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

