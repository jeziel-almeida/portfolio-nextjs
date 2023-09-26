import CopyButton from '@/components/commons/CopyButton'
import Head from 'next/head'
import React from 'react'

const Contatos = () => {

  const CONTATOS = [
    {contato: "Email", url: "mailto:jeziel.almeida16@gmail.com", titulo: "jeziel.almeida16@gmail.com"},
    {contato: "LinkedIn", url: "https://www.linkedin.com/in/jeziel-almeida/", titulo: "https://www.linkedin.com/in/jeziel-almeida/"},
    {contato: "GitHub", url: "https://github.com/jeziel-almeida", titulo: "https://github.com/jeziel-almeida"},
  ]

  return (
    <>
        <Head>
            <title>Contatos | Jeziel</title>
        </Head>
        <div className='mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32'>
          <h1 className='text-5xl md:text-7xl font-bold text-center'>Contatos</h1>
          <ul className='table mx-auto space-y-6 md:space-y-8'>
            {CONTATOS.map((cont, index) => (
              <li className='md:text-xl' key={index}>
                <span className='font-bold'>{cont.contato}</span>
                <div className='flex gap-1 md:gap-3 items-center'>
                  <a href={cont.url} className='text-sm md:text-lg text-slate-300 underline truncate'>{cont.titulo}</a>
                  <CopyButton textToCopy={cont.titulo} />
                </div>
              </li>
            ))}
          </ul>
        </div>
    </>
  )
}

export default Contatos