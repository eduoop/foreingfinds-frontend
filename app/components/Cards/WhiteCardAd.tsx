import React from 'react'

type Props = {
    children: React.JSX.Element
}

const WhiteCardAd = ({ children }: Props) => {
    return (
        <div className='bg-white rounded-md border border-gray-400/40 p-4'>
            {children}
        </div>
    )
}

export default WhiteCardAd