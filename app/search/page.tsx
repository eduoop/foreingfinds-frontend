"use client"
import { Ad } from '@/models/Ad'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'
import { Container } from '../components/Container'
import AdSquareSkeleton from '../components/Cards/AdSquareSkeleton'
import ListAdsHome from '../components/Lists/AdsHome/ListAdsHome'
import ListAdsHomeSearch from '../components/Lists/AdsSearch/ListAdsHomeSearch'

const baseUrl = process.env.BASE_URL

const page = () => {

    const search = useSearchParams();
    const searchQuery = search.get('q')

    const encodedSearchQuery = encodeURIComponent(searchQuery || '')

    return (
        <Container minAllVh={true}>
            <>
                {searchQuery ?

                    <h1 className='text-2xl mt-7 font-normal text-primaryGraffiti mb-5'>Resultados para: {searchQuery}</h1>
                    :
                    <h1 className='text-2xl mt-7 font-normal text-primaryGraffiti mb-5'>Anúncios publicados</h1>
                }

                <Suspense
                    fallback={
                        <div className="grid gap-2 tablet:gap-4 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5">
                            {<AdSquareSkeleton quantity={8} />}
                        </div>
                    }>
                    <ListAdsHomeSearch searchQuery={encodedSearchQuery} />
                </Suspense>
            </>
        </Container>
    )
}

export default page

