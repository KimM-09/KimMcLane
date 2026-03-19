import React from 'react'

const About = () => {
  return (
    <section className='relative min-h-screen mt-24 md:mt-12 flex items-center justify-center' id='about' >
      <div className='flex mb-14'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
          <div className='absolute w-2 h-2 rounded-full opacity-60 bg-fuchsia-600' style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}></div>
        ))}
      </div>
      <div className='w-full flex flex-col items-center m-auto md:flex-row'>
      <div className='z-50 space-y-4 p-10 font-[century-gothic] text-xl md:w-2xl md:text-xl'>
        <p>I am a graduate of Thinkful Full Stack Software Engineer bootcamp. During the bootcamp I acquired comprehensive knowledge of industry best practices and software development standards, focusing on JavaScript, HTML5, CSS3, React Native, Node.js, PostgreSQL, RESTful APIs, algorithms, and data structures.</p>
        <p>In addition to my technical skills, I bring a strong work ethic, attention to detail, and a passion for continuous learning. I am eager to contribute my skills and enthusiasm to a dynamic team, and I am excited about the opportunity to grow and develop as a software engineer.</p> <p>When I'm not coding, I enjoy cooking, baking, yoga, and playing the occasional video game. Feel free to explore my projects and get in touch!</p>
      </div>
      <div className='z-50'>
        <img src='/assets/stylized-me1.png' alt='Kim McLane' className='w-sm md:w-lg lg:w-md'/>
      </div>
      </div>
      </div>
    </section>
  )
}

export default About
