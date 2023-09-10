import React from 'react'
import { Container } from '../Container'
import Skeleton from 'react-loading-skeleton'

const AdSkeleton = () => {
    return (
        <Container bgColor='#ebebeb' minAllVh={true}>
            <div className='mt-7'>
                <div className='w-full flex flex-col tablet:flex-row gap-3 h-full mt-2'>
                    <div className='w-full tablet:w-[60%] h-full flex flex-col gap-4'>
                        <Skeleton count={1} height="402px" width="100%" />

                        <div>
                            {/* <h2 className='text-[20px] font-medium text-neutralBlack w-full'>Descrição</h2>
                            <p className='text-[16px] font-normal text-neutralBlack mt-5 w-[90%]'>{ad.description}</p> */}
                            <Skeleton count={1} height="30px" width="47%" />
                            <Skeleton count={1} height="30px" width="68%" />
                        </div>

                        {/* <div className='w-full h-[1px] rounded-full bg-slate-400/60 my-5' /> */}
                        <Skeleton count={1} height="1px" width="100%" />

                        <div className='w-full'>
                            <Skeleton count={1} height="40px" width="47%" />
                            <div className='flex gap-10 mt-5 w-full'>
                                <div className='flex flex-col gap-3'>
                                    <Skeleton count={1} height="15px" width="150px" />
                                    <Skeleton count={1} height="30px" width="150px" />
                                </div>
                                <div className='flex flex-col gap-3 w-full'>
                                    <Skeleton count={1} height="15px" width="150px" />
                                    <Skeleton count={1} height="30px" width="150px" />
                                </div>
                            </div>
                        </div>

                        <Skeleton count={1} height="1px" width="100%" />

                        <div className='w-full mb-32'>
                            <Skeleton count={1} height="250px" width="100%" />
                        </div>
                    </div>

                    <div className='w-full tablet:w-[40%] h-full flex flex-col gap-2 mb-10'>
                        <div className='hidden tablet:block'>
                            <Skeleton count={1} height="230px" width="100%" />
                        </div>

                        <Skeleton count={1} height="300px" width="100%" />
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default AdSkeleton