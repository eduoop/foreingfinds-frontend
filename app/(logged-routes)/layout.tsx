"use client"
import React, { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { useGlobalUserContext } from '../contexts/User/UserContext'

interface PrivateLayoutProps {
    children: ReactNode
}

const PrivateLayout = ({ children }: PrivateLayoutProps) => {

    const { user } = useGlobalUserContext()
    const localUser = localStorage.getItem('user')

    if(!user || !localUser) {
        redirect('/login')
    }

    return <>{children}</>

}

export default PrivateLayout