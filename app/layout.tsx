import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContext from '@/context/active-section-context'
import ThemeContextProvider from "@/context/theme-context"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shreya Sundar | Portfolio',
  description: 'Shreya is a software engineer who loves developing for social good',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text relative pt-28 sm:pt-36 text-opacity:90`}>
        <div className='bg-background text-text'></div>
        <div className='bg-background absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        <ThemeContextProvider>
          <ActiveSectionContext>
            {children}
          </ActiveSectionContext>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
