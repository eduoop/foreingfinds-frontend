import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const WhiteCard = ({ children }: Props) => {
  return (
    <div className='p-[32px] md:p-[16px] mt-[24px] rounded-lg bg-white overflow-hidden shadow-lg'>
        {children}
    </div>
  )
}

export default WhiteCard