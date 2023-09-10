import React from 'react'
import RelatedAdsClient from './RelatedAdsClient'

type Props = {
    categoryId: number;
    subcategoryId: number;
    price: number;
    adId: number;
}

const RelatedAds = ({ categoryId, subcategoryId, price, adId }: Props) => {
    return (
        <RelatedAdsClient adId={adId} categoryId={categoryId} price={price} subcategoryId={subcategoryId}/>
    )
}

export default RelatedAds