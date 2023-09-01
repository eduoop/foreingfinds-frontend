import EditAd from '@/app/components/EditAd/EditAd'
import React from 'react'

const page = ({ params }: { params: any }) => {
    return (
        <EditAd adId={params.id}/>
    )
}

export default page