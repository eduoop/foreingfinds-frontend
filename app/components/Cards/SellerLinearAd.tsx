import { Ad } from '@/models/Ad'
import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { CgCalendarToday } from 'react-icons/cg'
import { format } from 'date-fns'
import Link from 'next/link'
import { TbEdit } from 'react-icons/tb'
import { HiOutlineTrash } from 'react-icons/hi'
import DeleteDropDown from '../DeleteDropDown'
import FilterIntegerValueToReal from '@/utils/FilterIntegerValueToReal'
import GetDateFromDatetime from '@/utils/GetDateFromDatetime'

type Props = {
    ad: Ad;
}

const SellerLinearAd = ({ ad }: Props) => {

    return (
        <div className='w-full flex gap-4 border-b-2 border-weakGray pb-10'>
            <Link href={`/ad/${ad.id}`}>
                <div className='w-[112px] h-[112px] rounded-md'>
                    <img
                        className='w-full h-full object-cover rounded-md'
                        src={ad.files[0].file_url}
                        alt="product thumbnail"
                        draggable={false}
                    />
                </div>
            </Link>

            <div className='flex flex-col'>
                <Link href={`/ad/${ad.id}`} className='group'>
                    <h1 style={{ fontWeight: "500" }} className='text-primaryGraffiti text-[17px] mb-1 duration-150 group-hover:text-primaryOrange'>{ad.title}</h1>
                </Link>
                <h1 style={{ fontWeight: "500" }} className='text-primaryGraffiti text-[17px] mb-2'>{FilterIntegerValueToReal(ad.price)}</h1>

                <div className='flex items-center gap-2 mb-2'>
                    <div className='flex items-center gap-1'>
                        <FiUsers className='text-gray-500' />
                        <small className='text-gray-500 text-[14px]'>{ad.views} visitas</small>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgCalendarToday className='text-gray-500' />
                        <small className='text-gray-500 text-[14px]'>{GetDateFromDatetime(ad.updated_at)}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerLinearAd