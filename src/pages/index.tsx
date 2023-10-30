import AboutMe from "@/components/Home/AboutMe"
import Projects from "@/components/Home/Projects"
import { loadHome } from "@/service/LoadHome"
import { Home } from "@/types/Home"
import { GetStaticProps } from "next"
import Head from "next/head"

interface HomeProps {
  home: Home
}

export default function Home({ home }: HomeProps) {

  const { aboutMe, projects } = home;

  return (
    <>
      <Head>
        <title>Sobre mim | Jeziel</title>
        <meta 
          name="description"
          content="Sou desenvolvedor Front-end que busca cada dia mais novos conhecimentos e aprimoramento!"
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe} />
        <div id="projetos">
          <Projects projects={projects} />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
  }
}