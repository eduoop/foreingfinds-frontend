import { Ad } from '@/models/Ad'
import React from 'react'
import EditAdClient from './EditAdClient'

const baseUrl = process.env.BASE_URL

const getAd = async (adId: number) => {
    const res = await fetch(`${baseUrl}/products/${adId}`, {
        method: 'get',
    })
    const data: Ad = await res.json()
    return data
}

type Props = {
    adId: number;
}

const EditAd = async ({ adId }: Props) => {

    let ad = await getAd(adId)

    return (
        <>
            {ad &&
                <EditAdClient ad={ad} />
            }
        </>
    )
}

export default EditAd