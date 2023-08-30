"use client"
import { Ad } from '@/models/Ad'
import React, { useEffect, useState } from 'react'
import AdSquare from '../Cards/AdSquare';
import InfiniteScroll from "react-infinite-scroll-component";


type Props = {
    ads: Ad[];
    getAds: (page: number) => Promise<Ad[]>
}

const ListAdsHomeClient = ({ ads, getAds }: Props) => {

    const [fetchedAds, setFetchedAds] = useState<Ad[]>([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        setFetchedAds(ads)
        setPage(page + 1)
        console.log("mudou mais um vezinha")

        ads.map((ad) => {
            const includedAd = fetchedAds.find(findAd => findAd.id === ad.id)
            console.log(includedAd)
            if (includedAd !== undefined) {
                setFetchedAds(olds => [...olds, ad])
            }
        })
    }, [ads])

    const fetchMoreData = () => {
        getAds(page)
    };

    return (
        <div className='grid gap-2 tablet:gap-4 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5'>
            <InfiniteScroll
                dataLength={fetchedAds.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                {fetchedAds.map((i, index) => (
                    <p>{index}</p>
                ))}
            </InfiniteScroll>
            {fetchedAds.map((ad) => (
                <AdSquare ad={ad} />
            ))}
        </div>
    )
}

export default ListAdsHomeClient