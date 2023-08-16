import React from 'react'

type Props = {
    children: React.JSX.Element;
    width?: number | undefined;

}

export const Container = ({ children, width }: Props) => {

const containerWidth = width ?  `w-[${width}]` : "w-[1200px]"

  return (
    <div className={`${containerWidth} mr-auto ml-auto`}>
        {children}
    </div>
  )
}
