"use client"
import React, { ReactNode, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type Props = {
  children: ReactNode;
  message: string;
  confirmFunction: () => void;
}

const DeleteDropDown = ({ children, message, confirmFunction }: Props) => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {children}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className='shadow-lg z-10 rounded-md w-[300px] bg-gray-100 flex flex-col items-center p-3 gap-1'>
          <h2 className='text-neutralBlack text-md font-medium'>{message}</h2>
          <div className='flex items-center'>
            <DropdownMenu.Item
              onClick={() => {
                confirmFunction()
              }}
              className='text-neutralBlack cursor-pointer text-md font-medium px-4 py-1 rounded-full duration-100 border-none outline-none hover:bg-primaryOrange/50 underline hover:text-black'>
              Confirmar
            </DropdownMenu.Item>

            <DropdownMenu.Item
              className='text-neutralBlack cursor-pointer text-md font-medium px-4 py-1 rounded-full duration-100 border-none outline-none hover:bg-primaryOrange/50 underline hover:text-black'>
              Cancelar
            </DropdownMenu.Item>
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export default DeleteDropDown