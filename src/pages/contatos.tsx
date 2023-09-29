import CopyButton from '@/components/commons/CopyButton'
import { loadContacts } from '@/service/LoadContacts';
import Head from 'next/head'
import React from 'react'

interface ContatosProps {
  contacts: {
    name: string;
    link: string;
    isMail?: boolean;
  }[];
}

const Contatos = ({ contacts }: ContatosProps) => {

  

  return (
    <>
        <Head>
            <title>Contatos | Jeziel</title>
        </Head>
        <div className='mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32'>
          <h1 className='text-5xl md:text-7xl font-bold text-center'>Contatos</h1>
          <ul className='table mx-auto space-y-6 md:space-y-8'>

            {contacts.map(({link, name, isMail}, index) => (
              <li className='md:text-xl' key={name + index}>
                <span className='font-bold'>{name}</span>
                <div className='flex gap-1 md:gap-3 items-center'>
                  <a href={isMail ? `mailto:${link}` : link} target='_blank' className='text-sm md:text-lg text-slate-300 underline truncate'>{link}</a>
                  {isMail && <CopyButton textToCopy={link} />}
                </div>
              </li>
            ))}

          </ul>
        </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const contacts = await loadContacts();

  return {
    props: {
      contacts
    }
  }
}

export default Contatos