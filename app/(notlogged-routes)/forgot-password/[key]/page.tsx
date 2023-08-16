'use client'
import React, { useEffect, useState } from 'react'
import TextInput from '../../../components/Inputs/TextInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { User } from "@/models/user"
import PasswordInput from '../../../components/Inputs/TextPassword'
import Orange from '../../../components/Buttons/OrangeUppercase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Sing from '@/app/components/Headers/Sing'
import { toast } from 'react-hot-toast'
import MaskInput from '@/app/components/Inputs/MaskInput'
import TextPassword from '@/app/components/Inputs/TextPassword'
import Disabled from '@/app/components/Inputs/Disabled'

const registerFormSchema = z.object({
    password: z.string().nonempty('A senha é obrigatória').min(6, 'Digite mais de 6 caracters'),
    passwordConfirmation: z.string().nonempty('A senha é obrigatória').min(6, 'Digite mais de 6 caracters')
}).superRefine(({ passwordConfirmation, password }, ctx) => {
    if (passwordConfirmation !== password) {
        ctx.addIssue({
            code: "custom",
            message: "As senhas não são iguais",
            path: ['passwordConfirmation']
        });
    }
});

export type RegisterFormData = z.infer<typeof registerFormSchema>

const completeRegister = ({ params }: { params: any }) => {

    const baseUrl = process.env.BASE_URL

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema)
    })

    const [user, setUser] = useState<User>()

    const [loading, setLoading] = useState(false)

    const router = useRouter()

    console.log(errors)

    const consultToken = async () => {
        console.log(params.key)
        if (baseUrl) {
            const res = await fetch(`${baseUrl}/users/forgot-password/${params.key}`, {
                method: 'GET',
            })
            const data = await res.json()
            setUser(data)
        }
    }

    const sendRegisterEmail = async (data: RegisterFormData) => {
        setLoading(true)

        const password = data.password
        const passwordConfirmation = data.passwordConfirmation

        if (baseUrl) {
            await fetch(`${baseUrl}/users/forgot-password`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    password: password,
                    passwordConfirmation: passwordConfirmation,
                    key: params.key
                })
            })
                .then((res) => {
                    setLoading(false)
                    const ok = res.ok
                    const status = res.status

                    if (ok) {
                        toast.success('Senha alterada')
                        router.replace("/login")
                    } else {
                        toast.error(`Algo deu errado (${status}`)
                    }
                })
                .catch((err) => {
                    setLoading(false)
                    console.log(err)
                })
        }


    }

    useEffect(() => {
        consultToken()
    }, [])

    return (
        <div className='min-h-screen bg-primaryOrange flex flex-col items-center overflow-x-hidden'>

            <Sing />

            <div className='w-[400px] sm:w-[300px] bg-white mt-10 rounded-md shadow-md flex flex-col p-8 mb-20'>
                <form onSubmit={handleSubmit(sendRegisterEmail)} className='flex flex-col gap-2'>
                    <h1 className='font-roboto text-2xl mb-3'>Recuperar conta</h1>
                    {user &&
                        <Disabled name='name' value={user.email}
                        />
                    }

                    <TextPassword errors={errors} register={register} placeholder='Senha'
                        name='password'
                    />

                    <TextPassword errors={errors} register={register} placeholder='Confirmar senha'
                        name='passwordConfirmation'
                    />

                    <div className='flex flex-col gap-1'>
                        <Orange text='Salvar' disabled={loading} />
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='w-full h-[1px] bg-[#ccc] rounded-xl' />
                        <small className='text-[#ccc] font-roboto'>OU</small>
                        <div className='w-full h-[1px] bg-[#ccc] rounded-xl' />
                    </div>

                    <h2 className='justify-center w-full text-[#ccc] font-roboto text-[15px] flex items-center gap-2'>
                        Ja possue uma conta?
                        <Link href="/forgot-password" className='font-roboto text-primaryOrange'>Entrar</Link>
                    </h2>

                </form>
            </div>
        </div>
    )
}

export default completeRegister