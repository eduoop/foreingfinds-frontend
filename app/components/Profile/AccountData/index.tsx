"use client"
import React, { useEffect, useState } from 'react'
import WhiteCard from '../../WhiteCard'
import CardTitle from '../../Texts/CardTitle'
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from '../../Inputs/TextInput'
import MaskInput from '../../Inputs/MaskInput'
import Orange from '../../Buttons/OrangeUppercase'
import { useGlobalUserContext } from '@/app/contexts/User/UserContext'
import InputUserRegisterImage from '../../FilesInputs/InputUserImage'
import { toast } from 'react-hot-toast'

const editUserDataSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  surname: z.string().nonempty("O apelido é obrigatório"),
  phone: z.string()
    .nonempty('O telefone é obrigatório').min(11),
  password: z.string().min(6, 'Digite mais de 6 caracters').optional(),
  passwordConfirmation: z.string().min(6, 'Digite mais de 6 caracters').optional()
}).superRefine(({ passwordConfirmation, password }, ctx) => {
  if ((passwordConfirmation && password) && (passwordConfirmation !== password)) {
    ctx.addIssue({
      code: "custom",
      message: "As senhas não são iguais",
      path: ['passwordConfirmation']
    });
  }
});

export type EditUserFormData = z.infer<typeof editUserDataSchema>

const AccountData = () => {

  const baseUrl = process.env.BASE_URL
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<EditUserFormData>({
    resolver: zodResolver(editUserDataSchema)
  })
  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState<any>();

  const { user, setUser, refreshContext } = useGlobalUserContext()

  const saveAvatar = async () => {
    const token = localStorage.getItem("authToken")

    if (image) {

      const formData = new FormData();

      formData.append("file", image)

      const data = await fetch(`${baseUrl}/users-avatar`, {
        method: 'PUT',
        headers: {
          'Authorization': `bearer ${token}`,
        },
        body: formData
      })
      const res = await data.json()

      if (res.imageUrl && user) {
        await setUser(oldUser => ({
          ...oldUser!,
          avatar: {
            file_url: res.imageUrl
          }
        }))

        if (user.avatar) {
          user.avatar.file_url = res.imageUrl
          localStorage.setItem('user', JSON.stringify(user))
        } else {
          user.avatar = {
            file_url: res.imageUrl
          }
          localStorage.setItem('user', JSON.stringify(user))
        }
      }
    }
  }

  const saveProfile = async (data: EditUserFormData) => {
    setLoading(true)
    const token = localStorage.getItem("authToken")

    const name = data.name
    const phone = data.phone
    const surname = data.surname
    // const password = data.password
    // const passwordConfirmation = data.passwordConfirmation

    if (user) {
      const res = await fetch(`${baseUrl}/users/${user.id}`, {
        method: 'put',
        headers: {
          'Authorization': `bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          surname: surname,
        })
      })

      setLoading(false)

      const resData = await res.json()

      if (resData) {
        toast.success("Perfil atualizado com sucesso")
        setUser(resData)
        refreshContext(resData)
      }

      if (image) {
        saveAvatar()
        return true
      }
    }
  }

  useEffect(() => {
    if (user) {
      setValue("name", user.name!)
      setValue("phone", user.phone!)
      setValue("surname", user.surname!)
    }
  }, [])

  return (
    <WhiteCard>
      <form onSubmit={handleSubmit(saveProfile)} className='flex flex-col items-start w-full'>
        <CardTitle>Minha conta</CardTitle>
        <div className='w-full flex mt-2'>
          <InputUserRegisterImage image={image} setImage={setImage} user={user} />
        </div>
        <div className='mt-3 flex flex-col gap-1 w-full'>
          <label htmlFor='name' className='w-fit font-medium text-primaryGraffiti'>
            Nome
          </label>

          <TextInput errors={errors} register={register} placeholder='Nome'
            name='name'
          />
        </div>

        <div className='mt-1 flex flex-col gap-1 w-full'>
          <label htmlFor='surname' className='flex items-center gap-2 w-fit'>
            <h3 className='font-medium text-primaryGraffiti'>Apelido </h3>
            <span className='text-[12px] font-light text-gray-600'>Como aparecerá nos seus anúncios.</span>
          </label>

          <TextInput errors={errors} register={register} placeholder='Apelido'
            name='surname'
          />
        </div>

        <div className='mt-1 flex flex-col gap-1 w-full'>
          <label htmlFor='phone' className='font-medium text-primaryGraffiti w-fit'>Telefone</label>

          <MaskInput errors={errors} register={register} placeholder='Telefone'
            name='phone' mask='(99) 99999-9999'
          />
        </div>

        <div className='w-full mt-2'>
          <Orange text='Salvar Alterações' disabled={loading} />
        </div>
      </form>
    </WhiteCard>
  )
}

export default AccountData