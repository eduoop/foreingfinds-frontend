import { Ad } from '@/models/Ad'
import React from 'react'

type Props = {
    ad: Ad;
}

const EditAdClient = ({ ad }: Props) => {
    return (
        <div>{ad.title}</div>
    )
}

export default EditAdClient