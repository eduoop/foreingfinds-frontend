"use client"
import React, { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { useGlobalUserContext } from '../contexts/User/UserContext'

interface PublicLayoutProps {
    children: ReactNode
}

const PublicLayout = ({ children }: PublicLayoutProps) => {

    const { user } = useGlobalUserContext()

    if(user) {
        redirect('/')
    }

    return <>{children}</>

}

export default PublicLayout