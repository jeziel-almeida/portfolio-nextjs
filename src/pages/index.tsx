import AboutMe from "@/components/Home/AboutMe"
import Projects from "@/components/Home/Projects"
import { Project, AboutMe as TAboutMe } from "@/types/Home"
import { GetStaticProps } from "next"
import Head from "next/head"
import React from "react"

interface HomeProps {
  home: {
    aboutMe: TAboutMe;
    projects: Project[];
  }
}

export default function Home({ home }: HomeProps) {
  
  const { aboutMe, projects } = home;

  console.log(home);

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
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </React.Fragment>
  )
}

const loadHome = async () => {
  const res = await fetch('https://gist.githubusercontent.com/jeziel-almeida/dcf88339d5cfe0b840f6abca4dcd1ed4/raw/4b523f9c10a8c51ad55c2ace59bbe8f27780c729/home.json');
  const home = await res.json();

  return home;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
  }
}