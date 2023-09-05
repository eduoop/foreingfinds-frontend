import React, { useState, ChangeEvent, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { UseFormGetValues } from 'react-hook-form';
import { UpdateAdFormData } from '../EditAd/EditAdClient';

type Error = {
    message: string;
    type: string;
}

type Props = {
    placeholder?: string | undefined;
    name: string;
    register: any;
    errors: any;
    label?: string;
    setValor: React.Dispatch<React.SetStateAction<string>>;
    valor: string;
}
function RealMask({ errors, name, register, label, placeholder, setValor, valor }: Props) {
    const handleValorChange = (value: string | undefined) => {
        if (value) {
            setValor(value);
        } else {
            setValor('');
        }
    };

    const error: Error = errors[name]

    const errorStyled = 'w-full border border-red-600 bg-red-100 font-roboto outline-none rounded-sm py-2 px-4 text-md'

    const styled = 'w-full border border-gray-300 font-roboto outline-none rounded-sm py-2 px-4 text-md focus-visible:border-black'

    return (
        <div>
            <div className='flex flex-col gap-1'>
                <div className='w-full flex flex-col gap-1'>
                    {label && label.length > 0 &&
                        <label className='text-md w-fit font-medium text-primaryGraffiti' htmlFor={name}>{label}</label>
                    }

                    <CurrencyInput
                        value={valor}
                        onValueChange={handleValorChange}
                        prefix="R$"
                        className={error ? errorStyled : styled}
                        decimalSeparator=","
                        id={name}
                        placeholder={placeholder}
                        groupSeparator="."
                        decimalsLimit={2}
                        {...register(name)}
                    />
                </div>

                {error ?
                    <div className='flex items-center'>
                        <span className='text-[13px] font-roboto text-red-600'>{error?.message}</span>
                    </div>
                    :
                    <span className='h-[20px]' />
                }

            </div>

        </div>
    );
}

export default RealMask;