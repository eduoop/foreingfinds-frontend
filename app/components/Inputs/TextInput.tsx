import React, { Ref, useEffect } from 'react'

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

const TextInput = ({ placeholder, name, register, errors }: Props) => {

    const error: Error = errors[name]

    const errorStyled = 'w-full border border-red-600 bg-red-100 font-roboto outline-none rounded-sm py-2 px-4 text-md'

    const styled = 'w-full border border-gray-300 font-roboto outline-none rounded-sm py-2 px-4 text-md focus-visible:border-black'

    return (
        <div className='flex flex-col gap-1'>
            <input
                className={error ? errorStyled : styled}
                type="text" placeholder={placeholder} {...register(name)} />

            {error ?
                <div className='flex items-center'>
                    <span className='text-[13px] font-roboto text-red-600'>{error?.message}</span>
                </div>
                :
                <span className='h-[20px]'/>
            }

        </div>

    )
}

export default TextInput