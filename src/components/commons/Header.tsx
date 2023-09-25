import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import roboto from '../fonts/Roboto'

const Header = () => {
    return (
        <header className={`${roboto.className} bg-jz-blue-900 text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}>
            <Link href="/">
                <Image src="/jeziel-logo.png" width={65} height={65} alt="Ícone da Letra J" />
            </Link>
            <nav className='hidden md:flex items-center gap-10 text-lg'>
                <Link href="/">Sobre mim</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contatos">Entre em contato</Link>
            </nav>
        </header>
    )
}

export default Header