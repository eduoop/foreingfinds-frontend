"use client"
import { Container } from '@/app/components/Container'
import TextInput from '@/app/components/Inputs/TextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { HiOutlineHome } from 'react-icons/hi'
import { TbHanger } from 'react-icons/tb'
import { FiMonitor } from 'react-icons/fi'
import { PiHandSoapBold } from 'react-icons/pi'
import { IoFootballOutline } from 'react-icons/io5'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { TbHorseToy } from 'react-icons/tb'
import { BiBook } from 'react-icons/bi'
import { TbCup } from 'react-icons/tb'
import { TbCut } from 'react-icons/tb'
import { FaRegTrashAlt } from 'react-icons/fa'
import { IoCarOutline } from 'react-icons/io5'
import { LiaToolsSolid } from 'react-icons/lia'
import { ProductCategory } from '@/models/ProductCategory';
import { Subcategory } from '@/models/Subcategory';
import TextareaInput from '../../components/Inputs/TextareaInput';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import RealMask from '@/app/components/Inputs/RealMask';
import { Ad } from '@/models/Ad'
import { File } from '@/models/File';
import SelectInputProductSubcategoryEdit from '../Inputs/SelectInputProductSubcategoryEdit';
import SelectInputProductCategoryEdit from '../Inputs/SelectInputProductCategoryEdit';
import InputProductImageEdit from '../FilesInputs/InputProductImageEdit';

type Props = {
    ad: Ad;
}

const updateAdDataSchema = z.object({
    title: z.string().nonempty('O titulo é obrigatório').min(3, 'Digite mais de 2 caracters'),
    price: z.string().nonempty('O preço é obrigatório'),
    category: z.string().nonempty('A categoria é obrigatória'),
    subcategory: z.string().nonempty('A subcategoria é obrigatória'),
    description: z.string().nonempty('A descrição é obrigatória').min(10, 'Digite mais de 10 caracters')
});

export type UpdateAdFormData = z.infer<typeof updateAdDataSchema>

const EditAdClient = ({ ad }: Props) => {

    const baseUrl = process.env.BASE_URL
    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<UpdateAdFormData>({
        resolver: zodResolver(updateAdDataSchema)
    })
    const [categories, setCategories] = useState<ProductCategory[]>([])
    const [subcategories, setSubcategories] = useState<Subcategory[]>([])

    const [productImages, setProductImages] = useState<any[]>([])
    const [productCreatedImages, setProductCreatedImages] = useState<File[]>([])
    const [valor, setValor] = useState<string>('');

    const [selectedCategory, setSelectCategory] = useState<ProductCategory>()
    const [selectedSubcategory, setSelectSubcategory] = useState("")
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const [deleteImagesNames, setDeleteImagesNames] = useState<string[]>([])

    const getCategories = async () => {
        const token = localStorage.getItem("authToken")

        const res = await fetch(`${baseUrl}/products-categories`, {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${token}`,
            },
        })
        const data = await res.json()
        setCategories(data)

        const adCategory = data.filter((category: ProductCategory) => category.id === ad.subcategory.product_category_id)[0]
        setValue("category", adCategory.name)
        setSelectCategory(adCategory)
    }

    const saveAd = async (data: UpdateAdFormData) => {
        const token = localStorage.getItem("authToken")

        if (productImages.length + productCreatedImages.length <= 1) {
            toast.error("Selecione pelo menos duas imagens")
            return
        }

        setLoading(true)

        const formData = new FormData();

        productImages.map((image) => {
            formData.append("images[]", image)
        })

        deleteImagesNames.map((imageDeleteId) => {
            formData.append("imagesDelete[]", imageDeleteId)
        })

        const title = data.title
        const price = data.price.includes("$") ? data.price.split("$")[1].replace(".", "") : data.price.replace(".", "")
        const description = data.description

        const category = categories.filter((categoryMap) => categoryMap.name === data.category)[0]
        const subcategoryId = category.subcategories.filter((subcategoryMap) => subcategoryMap.name === data.subcategory)[0].id

        formData.append("title", title)
        formData.append("price", price)
        formData.append("description", description)
        formData.append("subcategoryId", JSON.stringify(subcategoryId))
        formData.append("categoryId", JSON.stringify(category.id))

        const res = await fetch(`${baseUrl}/products/${ad.id}`, {
            method: 'put',
            headers: {
                'Authorization': `bearer ${token}`
            },
            body: formData
        })

        if (res.ok) {
            toast.success("Anúncio editado com sucesso!")
            router.replace("/my-ads")
        }


        setLoading(false)
    }

    const categoriesIcons = [
        {
            name: 'Eletrônicos e Tecnologia',
            Icon: FiMonitor
        },
        {
            name: 'Moda e Vestuário',
            Icon: TbHanger
        },
        {
            name: 'Casa e Decoração',
            Icon: HiOutlineHome
        },
        {
            name: 'Beleza e Cuidados Pessoais',
            Icon: PiHandSoapBold
        },
        {
            name: 'Esportes e Atividades ao Ar Livre',
            Icon: IoFootballOutline
        },
        {
            name: 'Saúde e Bem-Estar',
            Icon: MdOutlineHealthAndSafety
        },
        {
            name: 'Brinquedos e Jogos',
            Icon: TbHorseToy
        },
        {
            name: 'Livros, Música e Entretenimento',
            Icon: BiBook
        },
        {
            name: 'Alimentos e Bebidas',
            Icon: TbCup
        },
        {
            name: 'Artes e Artesanato',
            Icon: TbCut
        },
        {
            name: 'Autos e peças',
            Icon: IoCarOutline
        },
        {
            name: 'Serviços',
            Icon: LiaToolsSolid
        },
    ]

    const transformObjectUrl = (file: any) => {
        return URL.createObjectURL(file)
    }

    const removeImageFromArray = (currentImage: any) => {
        setProductImages(productImages.filter(image => image !== currentImage))
    }

    const removeImageCreatedFromArray = (imageName: string) => {
        console.log(imageName)
        setDeleteImagesNames(olds => [...olds, imageName])
        setProductCreatedImages(productCreatedImages.filter(image => image.file_name !== imageName))
    }

    useEffect(() => {
        getCategories()
        setValue("title", ad.title)
        setValue("description", ad.description)
        setValue("price", JSON.stringify(ad.price))
        setValor(JSON.stringify(ad.price))
        setValue("subcategory", ad.subcategory.name)
        setValue("category", ad.productCategory.name)
        setSelectSubcategory(ad.subcategory.name)
        setProductCreatedImages(ad.files)
    }, [])

    useEffect(() => {
        if (selectedCategory) {
            setSubcategories(selectedCategory.subcategories)
        }
    }, [selectedCategory])

    console.log(ad)

    return (
        <Container>
            <div className='w-full min-h-screen mb-10'>
                <h1 className='text-3xl font-medium text-primaryGraffiti w-full text-center my-6'>O que você está anunciando?</h1>

                <form onSubmit={handleSubmit(saveAd)} className='w-full rounded-lg border-2 border-primaryGraffiti/25 p-6'>
                    <div className='w-full flex gap-5 items-center justify-between mb-1 sm:flex-col sm:gap-1'>
                        <div className='w-[50%] flex flex-col gap-1 sm:w-[100%]'>
                            <TextInput
                                label='Titulo'
                                errors={errors}
                                register={register}
                                placeholder='Titulo'
                                name='title'
                            />
                            <SelectInputProductCategoryEdit
                                errors={errors}
                                register={register}
                                setSelectCategory={setSelectCategory}
                                itemsIcons={categoriesIcons}
                                setValue={setValue}
                                items={categories}
                                selectCategory={selectedCategory ? selectedCategory.name : ""}
                            />
                        </div>
                        <div className='w-[50%] flex flex-col gap-1 sm:w-[100%] sm:flex-col-reverse'>
                            <RealMask
                                label='Preço'
                                errors={errors}
                                register={register}
                                placeholder='R$ 50'
                                name='price'
                                setValor={setValor}
                                valor={valor}
                            />
                            <SelectInputProductSubcategoryEdit
                                errors={errors}
                                register={register}
                                setValue={setValue}
                                category={selectedCategory}
                                items={subcategories}
                                subcategoryValue={selectedSubcategory && selectedSubcategory}
                                setSubcategoryValue={setSelectSubcategory}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <TextareaInput
                            label='Descrição'
                            errors={errors}
                            register={register}
                            placeholder='Descrição'
                            name='description'
                        />

                        <div className='grid gap-5 grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-5 desktop:grid-cols-7 mt-2'>
                            {productImages && productImages.map((image: any) => (
                                <div className='h-[150px] rounded-2xl relative group'>
                                    <img className='h-full object-cover w-full rounded-2xl shadow-lg' src={transformObjectUrl(image)} />
                                    <div className='w-fit h-fit absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] opacity-0 group-hover:opacity-100 cursor-pointer p-8 bg-black/5 backdrop-blur-sm duration-100 rounded-full shadow-lg' onClick={() => removeImageFromArray(image)}>
                                        <FaRegTrashAlt fontSize={30} className="text-red-500" />
                                    </div>
                                </div>
                            ))}
                            {productCreatedImages.map((image) => (
                                <div className='h-[150px] rounded-2xl relative group'>
                                    <img className='h-full object-cover w-full rounded-2xl shadow-lg' src={image.file_url} />
                                    <div className='w-fit h-fit absolute translate-y-[-50%] translate-x-[-50%] top-[50%] left-[50%] opacity-0 group-hover:opacity-100 cursor-pointer p-8 bg-black/5 backdrop-blur-sm duration-100 rounded-full shadow-lg' onClick={() => removeImageCreatedFromArray(image.file_name)}>
                                        <FaRegTrashAlt fontSize={30} className="text-red-500" />
                                    </div>
                                </div>
                            ))}
                            <InputProductImageEdit productImagesCreates={productCreatedImages.length} productImages={productImages} setImages={setProductImages} />
                        </div>

                        <button className='bg-primaryOrange w-full font-normal text-xl text-white py-2 uppercase disabled:opacity-[.7] disabled:cursor-not-allowed mt-7' type="submit" disabled={loading}>Salvar</button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default EditAdClient