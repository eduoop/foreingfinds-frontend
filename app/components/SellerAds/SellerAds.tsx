import React from 'react'
import SellerAdsClient from './SellerAdsClient';

type Props = {
    adId: number;
    sellerId: number
}

const SellerAds = ({ adId, sellerId }: Props) => {
    return (
        <SellerAdsClient adId={adId} sellerId={sellerId}/>
    )
}

export default SellerAds