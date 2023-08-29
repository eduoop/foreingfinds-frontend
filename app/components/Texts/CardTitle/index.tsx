import React, { ReactNode } from 'react'

const CardTitle = ({children}: {children: ReactNode}) => {
  return (
    <h1 className='text-primaryGraffiti font-medium text-xl'>
        {children}
    </h1>
  )
}

export default CardTitle