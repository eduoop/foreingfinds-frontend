"use client"
import { Ad } from '@/models/Ad'
import React from 'react'
import { Meta } from './ListAdsHomeSearch'
import ListAdsHomeClient from './ListAdsHomeClient'

const baseUrl = process.env.BASE_URL

export type Data = {
    meta: Meta,
    data: Ad[]
}

let limit = 5

const getAds = async (page: number) => {
    const res = await fetch(`${baseUrl}/products?search&page=${page}&limit=${limit}`)
    const data: Data = await res.json()
    const ads: Ad[] = data.data
    return ads
}

export default async function ListAdsHome() {

    const ads = await getAds(1)

    return (
        <div className='w-full  mb-16'>
            <ListAdsHomeClient getAds={getAds} ads={ads} />
        </div>

    )
}

