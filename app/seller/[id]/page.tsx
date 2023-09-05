import AdLinearSkeleton from '@/app/components/Cards/AdLinearSkeleton'
import { Container } from '@/app/components/Container'
import ListMyAds from '@/app/components/Lists/MyAds/ListMyAds'
import React, { Suspense } from 'react'
import ListSellerAds from '../../components/Lists/Seller/ListSellerAds'

const page = ({ params }: { params: any }) => {
    return (
        <Container>
            <>
                <h1 className='text-2xl mt-7 font-normal text-primaryGraffiti mb-5'>Meus anúncios</h1>
                <Suspense
                    fallback={
                        <div className="w-full flex flex-col gap-10">
                            {<AdLinearSkeleton quantity={8} />}
                        </div>
                    }>
                    <ListSellerAds id={params.id} />
                </Suspense>
            </>
        </Container>
    )
}

export default page