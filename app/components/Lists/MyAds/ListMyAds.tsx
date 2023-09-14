"use client"
import { Ad } from '@/models/Ad'
import React, { useEffect, useState } from 'react'
import LinearAd from '../../Cards/LinearAd'
import { toast } from 'react-hot-toast'
import Link from 'next/link'
import {AiOutlinePlus} from "react-icons/ai"

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

const ListMyAds = () => {

    const [myAds, setMyAds] = useState<Ad[]>([])
    const [loading, setLoading] = useState(false)

    const FindMyAds = async () => {
        setLoading(true)
        let myAdsFetched = await getMyAds()
        setMyAds(myAdsFetched)
        setLoading(false)
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
            {myAds && !loading && myAds.length > 0 ? myAds.map((ad) => (
                <LinearAd ad={ad} confirmFunction={() => deleteAd(ad.id)} />
            ))
                :
                <Link className='flex items-center gap-3 rounded-full py-2 px-4 bg-primaryOrange w-fit text-white text-xl' href="/new-ad">Adicionar <AiOutlinePlus fontSize={25}/></Link>
            }
        </div>
    )
}

export default ListMyAds