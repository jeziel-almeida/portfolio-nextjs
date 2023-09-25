import AboutMe from "@/components/Home/AboutMe"
import Head from "next/head"
import React from "react"

export default function Home() {
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
      </div>
    </React.Fragment>
  )
}