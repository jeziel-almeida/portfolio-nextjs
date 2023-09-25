import AboutMe from "@/components/Home/AboutMe"
import Head from "next/head"
import Link from "next/link"
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
      <div>
        <AboutMe />
      </div>
    </React.Fragment>
  )
}