import React from 'react'
import { projects } from './lib/projects'
import ProjectCard from './components/ProjectCard'

const Portfolio = () => {
  return (
    <section className='container mx-auto p-4 min-h-screen'>
    <div id='projects' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-mt-24 mb-24'>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
    </section>
  )
}

export default Portfolio
