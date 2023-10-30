import GoBackIcon from '@/components/icons/GoBackIcon';
import { loadHome } from '@/service/LoadHome';
import { Home, Project, AboutMe as TAboutMe } from '@/types/Home';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'

interface ProjectsProps {
    home: Home;
}

export default function Page({ home }: ProjectsProps) {

    const { projects } = home;

    const router = useRouter();

    const actualProject = projects.filter(p => p.slug === router.query.slug);
    const project = actualProject[0];

    return (
        <div className='flex flex-col gap-6 xl:flex-row justify-center items-center w-full mt-16  md:mt-28 p-4 md:p-4 relative'>
            <Link href={'/#projects'} className='absolute -top-14  md:-top-20 md:left-16'>
                <GoBackIcon />
            </Link>

            <div className='relative mb-8 xl:mb-0'>
                <a href={project.deployment ? `${project.deployment}` : `${project.repository}`} target='_blank'>
                    <Image src={project.image.url} width={500} height={500} alt='Project screenshot' />
                </a>
                <span className={`absolute -bottom-4 left-1/2 -translate-x-1/2 p-1 text-sm rounded-lg text-white ${project.stack === 'front-end' ? 'bg-blue-600': project.stack === 'back-end' ? 'bg-green-600' : 'bg-yellow-600'}`}>{project.stack}</span>
            </div>

            <div className='text-center w-full md:w-[600px] flex flex-col gap-6'>
                <h2 className='text-xl sm:text-4xl'>{project.name}</h2>
                <div className='flex justify-center items-center flex-wrap gap-4 md:gap-6 text-sm md:text-base' style={{ color: '#6BDDFA' }}>
                    {project.techs.map((tech, idx) => (
                        <p key={tech + idx}>{tech}</p>
                    ))}
                </div>
                <p className='text-sm md:text-xl'>{project.description}</p>
                <div className='w-full h-[1px] bg-slate-500'></div>
                <div>
                    <p>Repositório: <a className='text-sm md:text-lg text-slate-300 underline' href={project.repository} target='_blank'>{project.repository}</a></p>
                    {project.deployment && <p>Deployment: <a className='text-sm md:text-lg text-slate-300 underline' href={project.deployment} target='_blank'>{project.deployment}</a></p>}
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const home = await loadHome();

    return {
        props: { home }
    }
}