import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500',
});

const Header = () => {
    return (
        <header className={roboto.className}>
            <Link href="/">
                <Image src="/code.png" width={55} height={55} alt="Ícone da Letra J" />
            </Link>
            <nav>
                <Link href="/">Sobre mim</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contatos">Entre em contato</Link>
            </nav>
        </header>
    )
}

export default Header