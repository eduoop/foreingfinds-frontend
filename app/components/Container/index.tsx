import React from 'react'

type Props = {
  children: React.JSX.Element;
  width?: number | undefined;

}

export const Container = ({ children, width }: Props) => {

  return (
    <div className={`w-screen flex justify-center`}>
      <div className='w-[90%] desktop:w-[1200px]'>
        {children}
      </div>
    </div>
  )
}
