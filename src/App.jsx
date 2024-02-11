import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat h-screen  '>
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div>
            <Contact/>
            {/* <StarsCanvas/> */}
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
