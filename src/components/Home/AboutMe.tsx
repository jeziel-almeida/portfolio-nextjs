import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutMe = () => {

  const TECNOLOGIAS = [
    {corDeFundo: "#2f74c0", cor: 'white', nome: "typescript"},
    {corDeFundo: "#6bddfa", cor: 'black', nome: "react"},
    {corDeFundo: "#efd81d", cor: 'black', nome: "javascript"},
    {corDeFundo: "black", cor: 'white', nome: "next.js"},
  ]

  return (
    <main>
        <div>
            <h1>Prazer, sou &nbsp;</h1>
            <span>Jeziel</span>
            <div>
              <h2>
                Sou desenvolvedor Front-end que busca cada dia mais novos conhecimentos e aprimoramento!
              </h2>
              <Link href="/contatos">Converse comigo!</Link>
            </div>
            <ul>
              {TECNOLOGIAS.map((tec, index) => (
                <li key={index} style={{backgroundColor: tec.corDeFundo, color: tec.cor}} >{tec.nome}</li>
              ))}
              {/* <li style={{backgroundColor: '#2f74c0', color: 'white'}}>typescript</li>
              <li style={{backgroundColor: '#6bddfa', color: 'black'}}>react</li>
              <li style={{backgroundColor: '#efd81d', color: 'black'}}>javascript</li>
              <li style={{backgroundColor: 'black', color: 'white'}}>next.js</li> */}
            </ul>
        </div>
        <div>
          <Image 
            src="https://avatars.githubusercontent.com/u/82993547?v=4" 
            alt="Imagem de perfil" 
            unoptimized
            width={500}
            height={500}
          />
          <p>
            <span>3+</span>
            <br/>
            anos de experiência
          </p>
        </div>
    </main>
  )
}

export default AboutMe