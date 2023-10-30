import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import roboto from '../../fonts/Roboto'
import Menu from './Menu'
import MenuIcon from '@/components/icons/MenuIcon'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = useCallback(() => {
        setIsMenuOpen(true)
    }, [])

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false)
    }, [])

    return (
        <header className={`${roboto.className} bg-jz-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
            <Link href="/">
                <Image src="/jeziel-logo.png" width={55} height={55} alt="Ícone da Letra J" />
            </Link>
            <button className='p-1 md:hidden' onClick={openMenu}>
                <MenuIcon className='fill-white w-10 h-10' />
            </button>
            <nav className='hidden md:flex items-center gap-10 text-lg'>
                <Link href="/">Sobre mim</Link>
                <Link href="/projects">Portfolio</Link>
                <Link href="/contatos">Entre em contato</Link>
            </nav>
            <Menu isVisible={isMenuOpen} onClose={closeMenu} />
        </header>
    )
}

export default Header