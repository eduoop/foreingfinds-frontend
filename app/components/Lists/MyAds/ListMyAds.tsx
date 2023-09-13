"use client"
import { Ad } from '@/models/Ad'
import React, { useEffect, useState } from 'react'
import LinearAd from '../../Cards/LinearAd'
import { toast } from 'react-hot-toast'

const baseUrl = process.env.BASE_URL

const getMyAds = async () => {
    const token = localStorage.getItem("authToken")

    const res = await fetch(`${baseUrl}/users-ads`, {
        method: 'get',
        headers: {
            'Authorization': `bearer ${token}`,
        },
    })
    const data: Ad[] = await res.json()
    return data
}

const ListMyAds = async () => {

    const [myAds, setMyAds] = useState<Ad[]>([])

    const FindMyAds = async () => {
        let myAdsFetched = await getMyAds()
        setMyAds(myAdsFetched)
    }

    const deleteAd = async (id: number) => {
        const token = localStorage.getItem("authToken")

        const res = await fetch(`${baseUrl}/products/${id}`, {
            method: 'delete',
            headers: {
                'Authorization': `bearer ${token}`,
            },
        })

        if (res.ok) {
            setMyAds(myAds.filter(ad => ad.id !== id))
            toast.success("Anúncio deletado com sucesso!")
        } else {
            toast.success("Algo deu errado!")
        }
    }

    useEffect(() => {
        FindMyAds()
    }, [])

    return (
        <div className='flex flex-col w-full gap-10'>
            {myAds && myAds.map((ad) => (
                <LinearAd ad={ad} confirmFunction={() => deleteAd(ad.id)} />
            ))}
        </div>
    )
}

export default ListMyAds