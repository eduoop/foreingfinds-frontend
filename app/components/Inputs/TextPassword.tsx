'use client'
import React, { Ref, useEffect, useState } from 'react'
import { BsFillExclamationCircleFill } from 'react-icons/bs'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { PiEyeClosed } from 'react-icons/pi'

type Error = {
    message: string;
    type: string;
}

type Props = {
    placeholder?: string | undefined;
    name: string;
    register: any;
    errors: any;
}

const PasswordInput = ({ placeholder, name, register, errors }: Props) => {

    const error: Error = errors[name]

    const [showPassword, setShowPassword] = useState(false)

    const errorStyled = 'w-full border border-red-600 bg-red-100 font-roboto outline-none rounded-sm py-2 px-4 text-md'

    const styled = 'w-full border border-gray-300 font-roboto outline-none rounded-sm py-2 px-4 text-md focus-visible:border-black'

    const eyeIcon = () => {
        if (showPassword) {
            return (
                <MdOutlineRemoveRedEye className="absolute bottom-[50%] right-[10px] translate-y-[50%] cursor-pointer text-[23px] text-[#757575]" onClick={() => setShowPassword(!showPassword)}/>
            )
        } else {
            return (
                <PiEyeClosed className="absolute bottom-[50%] right-[10px] translate-y-[50%] cursor-pointer text-[23px] text-[#757575]" onClick={() => setShowPassword(!showPassword)}/>
            )
        }
    }

    return (
        <div className='flex flex-col gap-2'>
            <div className='w-full relative'>
                <input
                    className={error ? errorStyled : styled}
                    type={showPassword ? "text" : "password"} placeholder={placeholder} {...register(name)}
                />
                {eyeIcon()}
            </div>

            {error ?
                <div className='flex items-center'>
                    <span className='text-sm font-roboto text-[13px] text-red-600'>{error?.message}</span>
                </div>
                :
                <span className='h-[20px]'/>
            }

        </div>

    )
}

export default PasswordInput