'use client'
import React, { useEffect, useState } from 'react'
import TextInput from '../../components/Inputs/TextInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import PasswordInput from '../../components/Inputs/TextPassword'
import Orange from '../../components/Buttons/OrangeUppercase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Sing from '@/app/components/Headers/Sing'
import { toast } from 'react-hot-toast'
import MaskInput from '@/app/components/Inputs/MaskInput'

const registerFormSchema = z.object({
    email: z.string()
        .nonempty('O e-mail é obrigatório')
        .email('Formato de e-mail inválido'),
})

export type RegisterFormData = z.infer<typeof registerFormSchema>

const ForgotPassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema)
    })

    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const sendRegisterEmail = async (data: RegisterFormData) => {
        setLoading(true)

        const email = data.email

        const baseUrl = process.env.BASE_URL

        if (baseUrl) {
            await fetch(`${baseUrl}/users/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    redirectUrl: "https://foreingfinds-frontend.vercel.app/forgot-password",
                })
            })
                .then((res) => {
                    setLoading(false)
                    const ok = res.ok
                    const status = res.status
                    if (ok) {
                        toast.success('Email enviado!')
                    } else {
                        toast.error(`Algo deu errado (${status})`)
                    }
                })
                .catch((err) => {
                    setLoading(false)
                    console.log(err)
                })
        }
    }

    return (
        <div className='w-screen h-screen bg-primaryOrange flex flex-col items-center'>

            <Sing />

            <div className='w-[400px] sm:w-[300px] bg-white mt-20 rounded-md shadow-md flex flex-col p-8'>
                <form onSubmit={handleSubmit(sendRegisterEmail)} className='flex flex-col gap-2'>
                    <h1 className='font-roboto text-2xl mb-3'>Recuperar conta</h1>
                    <TextInput errors={errors} register={register} placeholder='Email'
                        name='email'
                    />


                    <div className='flex flex-col gap-1'>
                        <Orange text='Enviar' disabled={loading} />
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='w-full h-[1px] bg-[#ccc] rounded-xl' />
                        <small className='text-[#ccc] font-roboto'>OU</small>
                        <div className='w-full h-[1px] bg-[#ccc] rounded-xl' />
                    </div>

                    <h2 className='justify-center w-full text-[#ccc] font-roboto text-[15px] flex items-center gap-2'>
                        Ja possue uma conta?
                        <Link href="/login" className='font-roboto text-primaryOrange'>Entrar</Link>
                    </h2>

                </form>
            </div>
        </div>
    )
}

export default ForgotPassword