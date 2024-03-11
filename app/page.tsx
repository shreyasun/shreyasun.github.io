import Image from 'next/image'
import Intro from '@/components/Intro'
import Experience from '@/components/Experience'
import SectionDivider from '@/components/SectionDivider'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
    </main>
  )
}
