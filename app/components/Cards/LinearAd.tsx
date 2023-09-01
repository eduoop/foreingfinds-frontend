import { Ad } from '@/models/Ad'
import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { CgCalendarToday } from 'react-icons/cg'
import { format } from 'date-fns'
import Link from 'next/link'
import { TbEdit } from 'react-icons/tb'
import { HiOutlineTrash } from 'react-icons/hi'
import DeleteDropDown from '../DeleteDropDown'

type Props = {
    ad: Ad;
    confirmFunction: () => void;
}

const LinearAd = ({ ad, confirmFunction }: Props) => {

    const getDate = () => {
        const date = new Date(ad.created_at)
        const formatted = format(date, "dd/MM/yyyy")
        return formatted
    }

    getDate()

    return (
        <div className='w-full flex gap-4 border-b-2 border-weakGray pb-10'>
            <Link href="/">
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
                <Link href="/" className='group'>
                    <h1 style={{ fontWeight: "500" }} className='text-primaryGraffiti text-[17px] mb-1 duration-150 group-hover:text-primaryOrange'>{ad.title} pro max</h1>
                </Link>
                <h1 style={{ fontWeight: "500" }} className='text-primaryGraffiti text-[17px] mb-2'>R$ {ad.price}</h1>

                <div className='flex items-center gap-2 mb-2'>
                    <div className='flex items-center gap-1'>
                        <FiUsers className='text-gray-500' />
                        <small className='text-gray-500 text-[14px]'>{ad.views} visitas</small>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CgCalendarToday className='text-gray-500' />
                        <small className='text-gray-500 text-[14px]'>{getDate()}</small>
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <Link href={`edit-ad/${ad.id}`}>
                        <div className='flex items-center gap-1 cursor-pointer rounded-full px-2 py-1 duration-100 hover:bg-primaryOrange/20'>
                            <TbEdit className='text-primaryOrange' />
                            <small className='text-primaryOrange text-[14px]'>Editar</small>
                        </div>
                    </Link>
                    <DeleteDropDown confirmFunction={confirmFunction} message='Tem ceteza que deseja excluir?'>
                        <div className='flex items-center gap-1 cursor-pointer rounded-full px-2 py-1 duration-100 hover:bg-primaryOrange/20'>
                            <HiOutlineTrash className='text-primaryOrange' />
                            <small className='text-primaryOrange text-[14px]'>Excluir</small>
                        </div>
                    </DeleteDropDown>
                </div>
            </div>
        </div>
    )
}

export default LinearAd