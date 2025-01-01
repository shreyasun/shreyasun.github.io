"use client"
import Header from '@/components/Header'
import {useState} from "react"
import Intro from '@/components/Intro'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'

export default function Home() {
  const [activeComponent, setActiveComponent] = useState('Intro');
  
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Intro':
        return <Intro />;
      case 'Experience':
        return <Experience />;
      case 'Projects':
        return <Projects />;
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
