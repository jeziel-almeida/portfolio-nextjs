import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
});

const AboutMe = () => {

  const TECNOLOGIAS = [
    {corDeFundo: "#2f74c0", cor: 'white', nome: "typescript"},
    {corDeFundo: "#6bddfa", cor: 'black', nome: "react"},
    {corDeFundo: "#efd81d", cor: 'black', nome: "javascript"},
    {corDeFundo: "black", cor: 'white', nome: "next.js"},
  ]

  return (
    <main className='flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between'>
        <div className='text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120'>
            <h1 className='text-3xl sm:text-7xl xl:leading-[5rem]'>Prazer, sou&nbsp;
              <strong className='font-bold'>Jeziel</strong>
            </h1>
            <div className='mb-12'>
              <h2 className={`${roboto.className} mb-12`}>
                Sou desenvolvedor Front-end que busca cada dia mais novos conhecimentos e aprimoramento!
              </h2>
              <Link href="/contatos" className='bg-jz-gray-500 p-3 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80'>
                Converse comigo!
              </Link>
            </div>
            <ul className='flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl'>
              {TECNOLOGIAS.map((tec, index) => (
                <li 
                  key={index} 
                  style={{backgroundColor: tec.corDeFundo, color: tec.cor}} 
                  className='w-fit p-2 rounded-md'
                >
                  {tec.nome}
                </li>
              ))}
            </ul>
        </div>
        <div className='relative'>
          <Image 
            src="https://avatars.githubusercontent.com/u/82993547?v=4" 
            alt="Imagem de perfil do portfolio" 
            unoptimized
            width={500}
            height={500}
            className='rounded-full'
          />
          <p className='p-4 w-fit text-base leading-tight bg-jz-blue-500 rounded-xl text-black absolute -bottom-3 sm:-bottom-3'>
            <strong className='text-4xl'>3+</strong>
            <br/>
            anos de experiência
          </p>
        </div>
    </main>
  )
}

export default AboutMe