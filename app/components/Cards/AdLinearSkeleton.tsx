"use client"
import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'

type Props = {
    quantity: number
}

const AdLinearSkeleton = ({ quantity }: Props) => {

    return (
        Array(quantity).fill(0).map(() => (
            <div className='w-full flex gap-4'>
                <Skeleton count={1} height="112px" width="112px" />

                <div className='flex flex-col'>
                    <Skeleton count={1} height={25} width="100%" />
                    <Skeleton count={1} height={30} width="112px" />

                    <div className='flex items-center gap-2 mb-2 mt-2'>
                        <Skeleton count={1} height={15} width="112px" />
                        <Skeleton count={1} height={15} width="112px" />
                    </div>

                    <div className='flex items-center gap-4'>
                        <Skeleton count={1} height={20} width="100px" />
                        <Skeleton count={1} height={20} width="100px" />
                    </div>
                </div>
            </div>
        ))
    )
}

export default AdLinearSkeleton