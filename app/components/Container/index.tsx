"use client"
import React from 'react'

type Props = {
  children: React.JSX.Element;
  bgColor?: string;
  minAllVh?: boolean

}

export const Container = ({ children, bgColor, minAllVh }: Props) => {

  const colorBg = bgColor ? bgColor : "#fff"
  const minHeightAll = minAllVh ? "min-h-screen" : "h-fit"

  return (
    <div className={`w-screen ${minHeightAll} flex justify-center bg-[${colorBg}]`}>
      <div className='w-[90%] desktop:w-[1200px]'>
        {children}
      </div>
    </div>
  )
}
