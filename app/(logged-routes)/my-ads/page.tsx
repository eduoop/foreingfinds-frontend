import AdLinearSkeleton from '@/app/components/Cards/AdLinearSkeleton'
import { Container } from '@/app/components/Container'
import ListMyAds from '@/app/components/Lists/MyAds/ListMyAds'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <Container minAllVh={true}>
      <>
        <h1 className='text-2xl mt-7 font-normal text-primaryGraffiti mb-5'>Meus anúncios</h1>
        <Suspense
          fallback={
            <div className="w-full flex flex-col gap-10">
              {<AdLinearSkeleton quantity={8} />}
            </div>
          }>
          <ListMyAds />
        </Suspense>
      </>
    </Container>
  )
}

export default page