"use client"
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { LuSearch } from 'react-icons/lu'

export const Search = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const onSearch = (e: FormEvent) => {
        e.preventDefault();

        const encodedSearchQuery = encodeURI(searchQuery)

        router.push(`/search?q=${encodedSearchQuery}`)
    }

    return (
        <form onSubmit={(e) => onSearch(e)} className='font-roboto border border-[#D2D2D2] flex justify-between tablet:justify-start laptop:justify-between items-center rounded-xl bg-white w-[90%] tablet:w-[auto] laptop:w-[50%] max-w-[470px]'>
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder='Buscar "celular"' className='px-[16px] py-[12px] rounded-xl outline-none text-[18px] border-transparent focus:border-primaryOrange border-2 border-solid mr-2 w-full tablet:w-auto laptop:w-full' />
            <button className='mr-2 duration-100 h-full p-2 text-gray-400 group rounded-full hover:bg-[#D2D2D2]'>
                <LuSearch fontSize={25} className="group-hover:text-[#1a1d23] duration-100" />
            </button>
        </form>
    )
}
