"use client"
import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

type Props = {
    quantity: number
}

const AdSquareSkeleton = ({ quantity }: Props) => {

    return (
        Array(quantity).fill(0).map(() => (
            <div className='flex flex-col gap-7 w-full'>
                <Skeleton count={1} height={200} width="100%" />

                <div>
                    <Skeleton count={1} height={30} width="50%" />
                    <Skeleton count={1} height={15} width="90%" />
                </div>
            </div>
        ))
    )
}

export default AdSquareSkeleton