import React from 'react'
import Skeleton from 'react-loading-skeleton'
import AdSquareSkeleton from './AdSquareSkeleton'

const SellerSkeleton = () => {
    return (
        <div className='w-full mb-16'>
            <div className='w-full h-[200px] p-6 rounded-md mb-4 border border-gray-400/30'>
                <div className='flex gap-3'>
                    <div className='w-[120px] h-[120px] rounded-full'>
                        <Skeleton count={1} height="100%" width="100%" circle />
                    </div>
                    <div className='flex flex-col h-full gap-3'>
                        <div className='flex-col tablet:flex-row flex tablet:items-center gap-3'>
                            <Skeleton count={1} height="30px" width="150px" />
                            <Skeleton count={1} height="15px" width="150px" />
                        </div>

                        <div>
                            <Skeleton count={1} height="15px" width="150px" />
                        </div>

                        <div className='p-1 rounded-full w-fit'>
                            <Skeleton count={1} height="30px" width="30px" circle />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mb-4'>
                <Skeleton count={1} height="50px" width="full" />
            </div>

            <div className='grid gap-2 tablet:gap-4 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5'>
                <AdSquareSkeleton quantity={10}/>
            </div>
        </div>
    )
}

export default SellerSkeleton