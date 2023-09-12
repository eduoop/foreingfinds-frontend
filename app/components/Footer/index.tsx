import React from 'react'
import { Container } from '../Container'
import Link from 'next/link'

const Footer = () => {

    const currentYear = () => {
        const date = new Date().getFullYear()
        return date
    }
    
    return (
        <footer className='w-screen bg-gray-800'>
            <Container minAllVh={false}>
                <div className='w-full flex flex-col items-center py-5'>
                    <div className='flex items-center gap-4'>
                        <h1 className='text-gray-200 tracking-wider'>ForeingFinds © {currentYear()}</h1>
                    </div>
                </div>
            </Container>
        </footer>

    )
}

export default Footer