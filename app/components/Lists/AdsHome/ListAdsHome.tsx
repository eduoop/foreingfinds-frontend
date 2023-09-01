"use client"
import { Ad } from '@/models/Ad'
import React, { useEffect, useState } from 'react'
import { Meta } from '../AdsSearch/ListAdsHomeSearch'
import ListAdsHomeClient from './ListAdsHomeClient'

const baseUrl = process.env.BASE_URL

export type Data = {
    meta: Meta,
    data: Ad[]
}

let limit = 25
let results = 0;

const getAds = async (page: number) => {
    const res = await fetch(`${baseUrl}/products?search&page=${page}&limit=${limit}`)
    const data: Data = await res.json()
    const ads: Ad[] = data.data
    results = data.meta.total
    return ads
}

export default async function ListAdsHome() {

    const [stateAds, setStateAds] = useState<Ad[]>([])

    const getEndSett = async (page: number) => {
        let ads = await getAds(page)
        if (ads) {

            ads.map((ad) => {
                const includedAd = stateAds.filter(findAd => findAd.id === ad.id)[0]
                if (!includedAd) {
                    setStateAds(olds => [...olds, ad])
                }
            })

            // ads.map((ad) => {
            //     setStateAds(olds => [...olds, ad])
            // })
        }
    }

    useEffect(() => {
        getEndSett(1)
    }, [])


    return (
        <div className='w-full mb-16'>
            <ListAdsHomeClient getAds={getEndSett} ads={stateAds} results={results} />
        </div>

    )
}

