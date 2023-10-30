import { Project } from '@/types/Home';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface ProjectsProps {
    projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <article className='space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left'>
            <h2 className='text-2xl md:text-4xl'>Projetos</h2>
            <ul className='flex flex-wrap gap-16 justify-center xl:justify-start'>
                {projects.map(({slug, name, image}, index) => (
                    <Link key={name + index} href={`/projects/${slug}`}>
                        <li className='text-base relative'>
                            <Image 
                                src={image.url}
                                alt={image.alt}
                                width={200}
                                height={200}
                                className='object-cover rounded-2xl h-[12.5rem] mb-4'
                            />
                            <span>{name}</span>
                            <div className='bg-jz-blue-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-5 -right-5'>
                                <span>{index + 1}</span>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
        </article>
    )
}

export default Projects