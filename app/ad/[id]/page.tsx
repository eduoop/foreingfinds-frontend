import AdSkeleton from '@/app/components/Cards/AdSkeleton'
import ShowAd from '@/app/components/ShowAd/ShowAd'
import React, { Suspense } from 'react'

const page = ({ params }: { params: any }) => {

    return (
        <Suspense
            fallback={
                <div className='w-screen'>
                    <AdSkeleton />
                </div>
            }>
            <ShowAd adId={params.id} />
        </Suspense>
    )
}

export default page