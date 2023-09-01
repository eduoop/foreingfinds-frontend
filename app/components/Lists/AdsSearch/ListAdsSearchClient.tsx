"use client"
import { Ad } from '@/models/Ad'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import AdSquare from '../../Cards/AdSquare';


type Props = {
    ads: Ad[];
    getAds: (page: number) => Promise<void>;
    results: number;
    setFetchedAds: React.Dispatch<React.SetStateAction<Ad[]>>;
    fetchedAds: Ad[];
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ListAdsSearchClient = ({ ads, getAds, results, fetchedAds, setFetchedAds, page, setPage }: Props) => {


    useEffect(() => {
        setPage(page + 1)
        if (fetchedAds.length === 0) {
            ads.map((ad) => {
                setFetchedAds(olds => [...olds, ad])
            })
        } else {
            ads.map((ad) => {
                const includedAd = fetchedAds.filter(findAd => findAd.id === ad.id)[0]
                if (!includedAd) {
                    setFetchedAds(olds => [...olds, ad])
                }
            })
        }
    }, [ads])

    const fetchMoreData = () => {
        getAds(page)
    };

    return (
        <InfiniteScroll
            dataLength={fetchedAds.length}
            next={fetchMoreData}
            hasMore={fetchedAds.length !== results ? true : false}
            className='grid gap-2 tablet:gap-4 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5'
            loader={<h4 />}
        >
            {fetchedAds.map((ad, index) => (
                <AdSquare key={index + ad.id} ad={ad} />
            ))}
        </InfiniteScroll>
    )
}

export default ListAdsSearchClient