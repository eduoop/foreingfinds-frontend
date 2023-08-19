import React from 'react'
import {LuSearch} from 'react-icons/lu'

export const Search = () => {
    return (
        <form className='font-roboto border border-[#D2D2D2] flex items-center rounded-xl bg-white'>
            <input type="text" placeholder='Buscar "celular"' className='px-[16px] py-[12px] rounded-xl outline-none border-none text-[18px]' />
            <button className='mr-2 duration-100 h-full p-2 text-gray-400 group rounded-full hover:bg-[#D2D2D2]'>
                <LuSearch fontSize={25} className="group-hover:text-[#1a1d23] duration-100"/>
            </button>
        </form>
    )
}
