import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Contatos = () => {
  return (
    <>
        <Head>
            <title>Contatos | Jeziel</title>
        </Head>
        <h1>Contatos</h1>
        <ul>
          <li>
            <span>E-mail</span>
            <div>
              <a href="mailto:jeziel.almeida16@gmail.com">jeziel.almeida16@gmail.com</a>
            </div>
          </li>
          <li>
            <span>LinkedIn</span>
            <div>
              <a href="https://www.linkedin.com/in/jeziel-almeida/">https://www.linkedin.com/in/jeziel-almeida/</a>
            </div>
          </li>
          <li>
            <span>GitHub</span>
            <div>
              <a href="https://github.com/jeziel-almeida">https://github.com/jeziel-almeida</a>
            </div>
          </li>
        </ul>
    </>
  )
}

export default Contatos