"use client"
import React, { useEffect, useState } from 'react'
import * as Select from '@radix-ui/react-select';
import { UseFormSetValue } from 'react-hook-form';
import { IoIosArrowDown } from 'react-icons/io';
import { Content, ItemSelectIndicator, ItemText, Portal, SelectItem, Trigger, Viewport } from './styles'
import { BsCheck2Circle, BsListNested, BsTextParagraph } from 'react-icons/bs';
import { IconType } from "react-icons"
import { CreateAdFormData } from '@/app/(logged-routes)/new-ad/page';
import { Subcategory } from '@/models/Subcategory';
import { ProductCategory } from '@/models/ProductCategory';

type ItemIcons = {
    name: string;
    Icon: IconType;
}

type Props = {
    setValue: UseFormSetValue<CreateAdFormData>;
    errors: any;
    register: any;
    items: Subcategory[];
    itemsIcons?: ItemIcons[];
    category?: ProductCategory | undefined;

    subcategoryValue?: string;
    setSubcategoryValue?: React.Dispatch<React.SetStateAction<string>>;
}

const SelectInputProductSubcategoryEdit = ({ setValue, items, itemsIcons, errors, register, category, subcategoryValue, setSubcategoryValue }: Props) => {
    const [formattedItems, setFormattedItems] = useState<{
        id: number,
        name: string,
        Icon?: IconType
    }[]>([])

    const error: Error = errors["subcategory"]

    const hasNotCategory = category && category.name || category && category.id ? false : true

    const setIcons = () => {
        if (itemsIcons && itemsIcons.length > 0 && itemsIcons.length === items.length) {
            items.map((item) => {
                const itemIcon = itemsIcons.filter(icon => icon.name.toLowerCase() === item.name.toLowerCase())[0].Icon
                const thisItemInFormattedIcons = formattedItems.filter((itemFilter) => itemFilter.name.toLowerCase() === item.name.toLowerCase())[0]
                if (!thisItemInFormattedIcons) {
                    setFormattedItems(oldsItems => [...oldsItems, {
                        id: item.id,
                        name: item.name,
                        Icon: itemIcon
                    }])
                }
            })
        } else {
            setFormattedItems([])
            items.map((item) => {
                setFormattedItems(oldItems => [...oldItems, {
                    id: item.id,
                    name: item.name
                }])
            })
        }
    }

    const changeSelect = (value: string) => {
        if (value) {

            setValue("subcategory", value)
            if (setSubcategoryValue && value !== "") {
                setSubcategoryValue(value)
            }
        }
    }

    useEffect(() => {
        setIcons()
    }, [items])

    return (
        <div className='w-full flex flex-col gap-1'>
            <h2 className='text-md w-fit font-medium text-primaryGraffiti'>Subcategoria</h2>

            {subcategoryValue ?
                <Select.Root onValueChange={(value) => changeSelect(value)} value={subcategoryValue}>
                    <Trigger placeholder='teste' disabled={hasNotCategory} {...register("subcategory")} invalid={error ? true : false}>
                        <Select.Value placeholder="Escolha a subcategoria" />
                        <Select.Icon style={{ display: 'flex', alignItems: 'center' }}>
                            <IoIosArrowDown />
                        </Select.Icon>
                    </Trigger>

                    <Portal>
                        <Content >
                            <Select.ScrollUpButton />
                            <Viewport>
                                {formattedItems.map(({ id, name, Icon }) => (
                                    <SelectItem key={id} value={name}>
                                        <ItemText> {Icon && <Icon />} {name}</ItemText>
                                        <ItemSelectIndicator>
                                            <BsCheck2Circle fontSize={25} />
                                        </ItemSelectIndicator>
                                    </SelectItem>
                                ))}

                            </Viewport>
                        </Content>
                    </Portal>
                </Select.Root>
                :
                <Select.Root onValueChange={(value) => changeSelect(value)}>
                    <Trigger placeholder='teste' disabled={hasNotCategory} {...register("subcategory")} invalid={error ? true : false}>
                        <Select.Value placeholder="Escolha a subcategoria" />
                        <Select.Icon style={{ display: 'flex', alignItems: 'center' }}>
                            <IoIosArrowDown />
                        </Select.Icon>
                    </Trigger>

                    <Portal>
                        <Content >
                            <Select.ScrollUpButton />
                            <Viewport>
                                {formattedItems.map(({ id, name, Icon }) => (
                                    <SelectItem key={id} value={name}>
                                        <ItemText> {Icon && <Icon />} {name}</ItemText>
                                        <ItemSelectIndicator>
                                            <BsCheck2Circle fontSize={25} />
                                        </ItemSelectIndicator>
                                    </SelectItem>
                                ))}

                            </Viewport>
                        </Content>
                    </Portal>
                </Select.Root>
            }

            {error ?
                <div className='flex items-center'>
                    <span className='text-[13px] font-roboto text-red-600'>{error?.message}</span>
                </div>
                :
                <span className='h-[20px]' />
            }
        </div>
    )
}

export default SelectInputProductSubcategoryEdit