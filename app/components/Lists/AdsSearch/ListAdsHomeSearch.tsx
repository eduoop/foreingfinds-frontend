"use client"
import { Ad } from '@/models/Ad'
import React, { useEffect, useState } from 'react'
import AdSquare from '../../Cards/AdSquare'
import ListAdsSearchClient from './ListAdsSearchClient'

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

let limit = 25
let results = 0;

const getAdsSearch = async (searchQuery: string, page: number) => {
    const res = await fetch(`${baseUrl}/products?search=${searchQuery}&page=${page}&limit=${limit}`)
    const data: Data = await res.json()
    const ads: Ad[] = data.data
    results = data.meta.total
    console.log(ads)
    return ads
}

export default async function ListAdsHomeSearch({ searchQuery }: Props) {

    const [stateAds, setStateAds] = useState<Ad[]>([])
    const [fetchedAds, setFetchedAds] = useState<Ad[]>([])
    const [page, setPage] = useState(1)

    const getEndSett = async (page: number) => {
        let ads = await getAdsSearch(searchQuery, page)
        if (ads) {

            ads.map((ad) => {
                const includedAd = stateAds.filter(findAd => findAd.id === ad.id)[0]
                if (!includedAd) {
                    setStateAds(olds => [...olds, ad])
                }
            })
        }
    }

    const getSearch = async (page: number) => {
        setPage(1)
        let ads = await getAdsSearch(searchQuery, page)
        setFetchedAds(ads)
    }

    useEffect(() => {
        getSearch(1)
    }, [searchQuery])

    return (
        <div className='w-full mb-16'>
            <ListAdsSearchClient fetchedAds={fetchedAds} setFetchedAds={setFetchedAds} getAds={getEndSett} ads={stateAds} results={results} page={page} setPage={setPage}/>
        </div>

    )
}

