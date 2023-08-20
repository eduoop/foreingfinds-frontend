import React from 'react'

type Props = {
  children: React.JSX.Element;
  width?: number | undefined;

}

export const Container = ({ children, width }: Props) => {

  return (
    <div className={`w-screen flex justify-center`}>
      <div className='w-[1200px] lg:w-[90%]'>
        {children}
      </div>
    </div>
  )
}
