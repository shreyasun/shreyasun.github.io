import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContext from '@/context/active-section-context'
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shreya Sundar | Portfolio',
  description: 'Shreya is a software engineer who loves development and design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity:90`}>
        <div className='bg-blue1 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#20332b]'></div>
        <div className='bg-blue2 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#204275]'></div>
        <ThemeContextProvider>
          <ActiveSectionContext>
            {children}
            <ThemeSwitch />
          </ActiveSectionContext>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
