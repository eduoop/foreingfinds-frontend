import { Ad } from '@/models/Ad'
import React from 'react'
import ShowAdClient from './ShowAdClient'

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

const ShowAd = async ({ adId }: Props) => {

  let ad = await getAd(adId)

  return (
    <ShowAdClient ad={ad}/>
  )
}

export default ShowAd