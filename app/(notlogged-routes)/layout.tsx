import { getServerSession } from 'next-auth'
import React, { ReactNode } from 'react'
import { nextAuthOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

interface PublicLayoutProps {
    children: ReactNode
}

const PublicLayout = async ({ children }: PublicLayoutProps) => {

    const session = await getServerSession(nextAuthOptions)

    if(session) {
        redirect('/')
    }

    return <>{children}</>

}

export default PublicLayout