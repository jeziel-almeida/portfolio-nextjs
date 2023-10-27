import { loadProjects } from '@/service/LoadProjects';
import Image from 'next/image';
import { useRouter } from 'next/router'

interface ProjectsProps {
    projects: {
        slug: string;
        image: string;
        title: string;
        techs: string[];
        description: string;
        repository: string;
        deployment?: string;
    }[];
}

export default function Page({ projects }: ProjectsProps) {

    const router = useRouter();
    //router.query.slug

    return (
        <div className='flex flex-col gap-6 md:flex-row justify-evenly items-center w-full mt-24'>
            <Image src="/random-wallpaper.jpg" width={500} height={500} alt='' />
            <div className='text-center w-[600px] flex flex-col gap-6'>
                <h2 className='text-4xl'>{router.query.slug}</h2>
                <div className='md:flex justify-center items-center gap-4' style={{ color: '#6BDDFA' }}>
                    <p>Javascript</p>
                    <p>React</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nesciunt explicabo itaque placeat ab ipsum eius iure eligendi officiis distinctio cupiditate, consequuntur voluptate commodi, sapiente voluptas nostrum. Ab, ea placeat!</p>
                <div>
                    <p>Repositório: <a className='text-sm md:text-lg text-slate-300 underline' href="https://google.com">https://google.com</a></p>
                    <p>Deploy: <a href="https://github.com">https://github.com</a></p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const projects = await loadProjects();

    return {
        props: {
            projects
        }
    }
}