import { ExternalLink } from 'lucide-react';
import React from 'react'

const ProjectCard = ({ project }) => {
    const { title, image, description, tech, github, demo } = project;
  return (
    <div className='bg-stone-100 text-stone-900 dark:text-stone-100 dark:bg-[#1c1917] dark:border-slate-800 rounded-lg p-4 shadow-sm hover:shadow-md transition'>
        <img src={image} alt={title} className='w-full h-48 object-cover' />
        <div className='p-4'>
            <h3 className='text-xl font-bold mb-2'>{title}</h3>
            <p className="text-stone-900 dark:text-stone-100 mb-4">{description}</p>
            <div className="flex gap-2 mb-4">
                {tech.map((tag) => (
                <span key={tag} className="bg-violet-600 text-stone-100 dark:bg-fuchsia-600 px-2 py-1 rounded text-sm">
                  {tag}
                </span>
        ))}
      </div>
            <div className='links flex gap-4'>
                <a href={github} target='_blank' className="text-stone-900 dark:text-stone-100 font-medium hover:underline">Github</a>
                <a href={demo} target='_blank' className="text-stone-900 dark:text-stone-100 hover:underline">Live Demo<ExternalLink className='inline-block mb-1 ml-1' size={20}/></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard
