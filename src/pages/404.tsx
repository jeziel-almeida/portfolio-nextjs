import roboto from "@/components/fonts/Roboto"
import Head from "next/head"
import Link from "next/link"

const NotFound = () => {
  return (
    <>
        <Head>
            <title>404 | Jeziel</title>
        </Head>
        <div className="flex flex-col items-center text-center mt-12 md:mt-24 gap-8 px-6 md:px-32">
            <h1 className="text-5xl sm:text-7xl font-bold">404</h1>
            <p className="flex flex-col gap-4 md:gap-8 md:text-xl">
                <span>Oops, não conseguimos encontrar essa página!</span>
                <span>Clique no botão abaixo para ser redirecionado à Página Inicial</span>
            </p>
            <Link href="/" className={`${roboto.className} p-4 bg-jz-blue-500 rounded-xl text-black font-bold mt-5 md:mt-12 md:text-xl w-fit`}>Ir para a Página Inicial</Link>
        </div>
    </>
  )
}

export default NotFound