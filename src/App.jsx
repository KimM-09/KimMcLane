import React from 'react';
import Portfolio from './Portfolio';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './Contact';

const App = () => {
  return (
    <div className='bg-stone-50 text-stone-900 dark:text-stone-100 dark:bg-[#0c0a09] min-h-screen overflow-x-hidden scroll-smooth'>
      <NavBar />
      <main>
      <About />
      <Portfolio />
      <Contact />
      </main>
    </div>
  )
}

export default App
