import React from 'react'

type Props = {
    text: string;
    disabled?: boolean;
}

const Orange = ({ text, disabled = false }: Props) => {
  return (
    <button disabled={disabled} className='w-full bg-primaryOrange font-roboto text-white py-2 uppercase disabled:opacity-[.7]
    disabled:cursor-not-allowed'>
        {text}
    </button>
  )
}

export default Orange