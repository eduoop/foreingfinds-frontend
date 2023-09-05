import ShowAd from '@/app/components/ShowAd/ShowAd'
import React from 'react'

const page = ({ params }: { params: any }) => {

    return (
        <ShowAd adId={params.id} />
    )
}

export default page