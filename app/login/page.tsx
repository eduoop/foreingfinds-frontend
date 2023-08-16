'use client'
import React, { useEffect, useState } from 'react'
import TextInput from '../components/Inputs/TextInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { signIn } from "next-auth/react"
import PasswordInput from '../components/Inputs/TextPassword'
import Orange from '../components/Buttons/OrangeUppercase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const loginFormSchema = z.object({
  email: z.string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de e-mail inválido'),

  password: z.string().min(6, 'Insira mais de 6 caracters')
})

export type LoginFormData = z.infer<typeof loginFormSchema>

const login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema)
  })

  const [loading, setLoading] = useState(false)

  const router = useRouter()

  console.log(errors)

  const login = async (data: LoginFormData) => {
    console.log(data)
    setLoading(true)

    const email = data.email
    const password = data.password


    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    })

    if (result?.error) {
      console.log(result)
      return
    }

    router.replace("/")
  }

  return (
    <div className='w-screen h-screen bg-primaryOrange flex flex-col items-center'>
      <div className='w-screen h-[80px] bg-white'>
      </div>

      <div className='w-[400px] min-h-[400px] bg-white mt-20 rounded-md shadow-md flex flex-col p-8'>
        <form onSubmit={handleSubmit(login)} className='flex flex-col gap-2'>
          <h1 className='font-roboto text-2xl mb-3'>Entre</h1>
          <TextInput errors={errors} register={register} placeholder='Email'
            name='email'
          />
          <PasswordInput errors={errors} register={register} placeholder='Senha'
            name='password'
          />

          <div className='flex flex-col gap-1'>
            <Orange text='Entre' />
            <Link href="/forgot-password" className='font-roboto text-blue-900 text-[12px]'>Esqueci minha senha</Link>
          </div>

          <div className='flex items-center gap-2'>
            <div className='w-full h-[1px] bg-[#ccc] rounded-xl' />
            <small className='text-[#ccc] font-roboto'>OU</small>
            <div className='w-full h-[1px] bg-[#ccc] rounded-xl' />
          </div>

          <h2 className='justify-center w-full text-[#ccc] font-roboto text-[15px] flex items-center gap-2'>
            Novo na ForeingFinds?
            <Link href="/forgot-password" className='font-roboto text-primaryOrange'>Cadastrar</Link>
          </h2>

        </form>
      </div>
    </div>
  )
}

export default login