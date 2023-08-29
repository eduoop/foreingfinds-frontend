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
    disabled?: boolean;
    label?: string;
}

const ValueInput = ({ placeholder, name, register, errors, disabled = false, label }: Props) => {

    const error: Error = errors[name]

    const errorStyled = 'w-full border border-red-600 bg-red-100 font-roboto outline-none rounded-sm py-2 px-4 text-md'

    const styled = 'w-full border border-gray-300 font-roboto outline-none rounded-sm py-2 px-4 text-md focus-visible:border-black'

    return (
        <div className='flex flex-col gap-1'>
            <div className='w-full flex flex-col gap-1'>
                {label && label.length > 0 &&
                    <label className='text-md w-fit font-medium text-primaryGraffiti' htmlFor={name}>{label}</label>
                }
                <input
                    className={error ? errorStyled : styled}
                    type="number" step="0.01" min="0.01" placeholder={placeholder} id={name} {...register(name)} disabled={disabled} />
            </div>

            {error ?
                <div className='flex items-center'>
                    <span className='text-[13px] font-roboto text-red-600'>{error?.message}</span>
                </div>
                :
                <span className='h-[20px]' />
            }

        </div>

    )
}

export default ValueInput