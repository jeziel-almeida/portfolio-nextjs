import GoBackIcon from '@/components/icons/GoBackIcon';
import { loadProjects } from '@/service/LoadProjects';
import Image from 'next/image';
import Link from 'next/link';
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

    const actualProject = projects.filter(p => p.slug === router.query.slug);
    const project = actualProject[0];

    return (
        <div className='flex flex-col gap-6 xl:flex-row justify-center items-center w-full mt-16  md:mt-28 p-4 md:p-4 relative'>
            <Link href={'/#projetos'} className='absolute -top-14  md:-top-20 md:left-16'>
                <GoBackIcon />
            </Link>
            <Image src={project.image} width={500} height={500} alt='' />
            <div className='text-center w-full md:w-[600px] flex flex-col gap-6'>
                <h2 className='text-xl sm:text-4xl'>{project.title}</h2>
                <div className='flex justify-center items-center flex-wrap gap-4 md:gap-6 text-sm md:text-base' style={{ color: '#6BDDFA' }}>
                    {project.techs.map((tech, idx) => (
                        <p key={tech + idx}>{tech}</p>
                    ))}
                </div>
                <p>{project.description}</p>
                <div>
                    <p>Repositório: <a className='text-sm md:text-lg text-slate-300 underline' href={project.repository}>{project.repository}</a></p>
                    {project.deployment && <p>Deployment: <a className='text-sm md:text-lg text-slate-300 underline' href={project.deployment}>{project.deployment}</a></p>}
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