import InputMask from 'react-input-mask';
import React, { Ref, useEffect } from 'react'

type Error = {
    message: string;
    type: string;
}

type Props = {
    name: string;
    disabled?: boolean;
    mask?: string;
    value: string | number;
}

const Disabled = ({ name, disabled = false, mask, value }: Props) => {

    return (
        <div className='flex flex-col gap-1'>
            {mask && mask.length > 0 ?
                <InputMask
                    className="w-full border border-gray-300 font-roboto outline-none rounded-sm py-2 px-4 text-md text-gray-500/50"
                    type="text" mask={mask} value={value} id={name} name={name} disabled={disabled}/>
                :

                <input
                    className="w-full border border-gray-300 font-roboto outline-none rounded-sm py-2 px-4 text-md text-gray-500/50"
                    type="text" disabled={disabled} value={value} id={name} name={name} />
            }

            {false ?
                <div className='flex items-center'>
                    <span className='text-[13px] font-roboto text-red-600'>123</span>
                </div>
                :
                <span className='h-[20px]' />
            }

        </div>

    )
}

export default Disabled