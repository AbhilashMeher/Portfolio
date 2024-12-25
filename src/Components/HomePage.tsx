import React, { useEffect, useState } from 'react'
import Header from './Header.tsx'
import Mail from './Mail.tsx'
import Social from './Social.tsx'
import About from './About.tsx'
import Projects from './Projects.tsx'
import Skills from './Skills.tsx'
import Internship from './Internship.tsx'
import Contact from './Contact.tsx'
import Footer from './Footer.tsx'
import Loader from './Loader.tsx'
import { Toaster } from 'react-hot-toast'
const HomePage = () => {
  const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000) 
    }, [])
    return <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
    {   loading!==true?<>
        <Toaster/>
            <Header />
            <About />
            <Projects />
            <Skills />
            <Internship />
            <Contact />
            <Footer/>
            <Mail />
            <Social />
            </>:
            <Loader/>}
        </div>
    };
export default HomePage
