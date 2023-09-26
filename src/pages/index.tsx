import AboutMe from "@/components/Home/AboutMe"
import Projects from "@/components/Home/Projects"
import Head from "next/head"
import React from "react"

export default function Home() {
  
  const projects = [
    {
      slug: "nextjs-ecommerce",
      name: "E-Commerce Next.js",
      image: {
        url: "https://i.imgur.com/Ss943Kf.png",
        alt: "Imagem da Página Inicial do site de e-commerce Basket"
      }
    },
    {
      slug: "crud-angular-spring",
      name: "CRUD Angular + Spring",
      image: {
        url: "https://i.imgur.com/EqDLCgc.png",
        alt: "Imagem da Página Inicial do site crud angular + spring"
      }
    },
    {
      slug: "aluratube-nextjs",
      name: "AluraTube com Next.js",
      image: {
        url: "https://i.imgur.com/zzIVCdS.png",
        alt: "Imagem da Página Inicial do site AluraTube"
      }
    },
  ]

  return (
    <React.Fragment>
      <Head>
        <title>Sobre mim | Jeziel</title>
        <meta 
          name="description"
          content="Sou desenvolvedor Front-end que busca cada dia mais novos conhecimentos e aprimoramento!"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe />
        <Projects projects={projects} />
      </div>
    </React.Fragment>
  )
}