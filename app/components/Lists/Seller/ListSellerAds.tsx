"use client"
import { Ad } from '@/models/Ad'
import React, { useEffect, useState } from 'react'
import { Meta } from '../AdsSearch/ListAdsHomeSearch'
import ListSellerAdsClient from './ListSellerAdsClient'
import { User } from '@/models/user'
import GetYearFromDate from '@/utils/GetYearFromDate'
import PersonIcon from "../../../../assets/person.svg";
import { MdEmail } from 'react-icons/md'

const baseUrl = process.env.BASE_URL

export type Data = {
    user: User,
    sellerAds: {
        meta: Meta,
        data: Ad[]
    }
}

let limit = 25
let results = 0;
let user: User | null = null

const getAds = async (page: number, id: number) => {
    const res = await fetch(`${baseUrl}/sellers/${id}?page=${page}&limit=${limit}`)
    const data: Data = await res.json()
    const ads: Ad[] = data.sellerAds.data
    results = data.sellerAds.meta.total
    user = data.user
    return ads
}

type Props = {
    id: number
}

export default async function ListSellerAds({ id }: Props) {

    const [stateAds, setStateAds] = useState<Ad[]>([])

    const getEndSett = async (page: number) => {
        let ads = await getAds(page, id)
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
            <div className='w-full min-h-[200px] p-6 rounded-md mb-4 border border-gray-400/30'>
                <div className='flex gap-3'>
                    <div className='min-w-[90px] w-[90px] min-h-[90px] h-[90px] tablet:min-w-[120px] tablet:w-[120px] tablet:min-h-[120px] tablet:h-[120px] rounded-full'>
                        <img src={user && user.avatar ? user.avatar.file_url : PersonIcon} alt="seller image" className='w-full h-full rounded-full object-cover' />
                    </div>
                    <div className='flex flex-col h-full gap-3'>
                        <div className='flex-col tablet:flex-row flex tablet:items-center gap-3'>
                            <h1 className='text-xl tablet:text-2xl font-medium text-primaryGraffiti'>
                                {user && user.name}
                            </h1>
                            <small className='text-md font-medium text-primaryGraffiti'>{user && user.surname}</small>
                        </div>

                        <div>
                            <small className='text-md font-medium text-gray-400'>
                                Na ForeingFinds desde {user && GetYearFromDate(user.created_at)}
                            </small>
                        </div>

                        <div className='p-1 rounded-full bg-green-600 w-fit'>
                            <MdEmail fontSize={20} className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-6 py-3 rounded-md border border-gray-400/30 mb-4'>
                <h1 className='text-gray-700 font-normal text-md flex items-center gap-2'>
                    <span className='text-gray-700 font-medium text-lg'>{results}</span> Anúncio(s)
                </h1>
            </div>
            <ListSellerAdsClient id={id} getAds={getEndSett} ads={stateAds} results={results} />
        </div>
    )
}

