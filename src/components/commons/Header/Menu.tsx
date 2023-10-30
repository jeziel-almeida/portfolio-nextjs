import { MenuCloseIcon } from '@/components/icons/MenuCloseIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MenuProps {
    isVisible: boolean;
    onClose: () => void;
}

const Menu = ({isVisible, onClose}: MenuProps) => {
  return (
    <div className={`${isVisible ? 'flex' : 'hidden'}
        fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden
    `}
        onClick={onClose}
    >
        <div className='w-full bg-jz-blue-900 h-96 shadow-md py-4 px-5'
            onClick={(e) => e.stopPropagation()}
        >
            <div className='flex justify-between mb-5'>
                <Link href='/'>
                    <Image src='/jeziel-logo.png' width={55} height={55} alt='Logo do nome Jeziel' />
                </Link>
                <button onClick={onClose}>
                    <MenuCloseIcon className='fill-white h-10 w-10' />
                </button>
            </div>
            <nav className='flex flex-col gap-5 text-xl p-5 items-center'>
                <Link href='/' onClick={onClose}>Sobre mim</Link>
                <Link href='/#projects' onClick={onClose}>Portfolio</Link>
                <Link href='/contatos' onClick={onClose}>Entre em contato</Link>
            </nav>
        </div>
    </div>
  )
}

export default Menu