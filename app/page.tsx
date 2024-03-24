"use client"
import Header from '@/components/Header'
import {useState} from "react"
import Intro from '@/components/Intro'
import Experience from '@/components/Experience'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('Intro');
  
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Intro':
        return <Intro />;
      case 'Experience':
        return <Experience />;
      case 'About':
        return <About />;
      case 'Projects':
        return <Projects />;
      case 'Skills':
        return <Skills />;
      default:
        return <Intro />;
    }
  };

  return (
    <main className="flex flex-col items-center px-4">
      <Header setActiveComponent={setActiveComponent}/>
      {renderComponent()}
    </main>
  )
}
