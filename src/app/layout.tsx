import type { Metadata } from 'next'
import { Roboto, Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import FaQLink from './components/faqLink'

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'GR - Transcription Service',
  description: 'GR - transcription service',
}

//Main layout of page

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={(inter.variable, roboto.variable)}>
      <body className="antialiased h-screen w-screen grid grid-cols-7 font-Inter">
        <Header />
        <main className="h-full w-full overflow-hidden  col-span-5 col-start-2 justify-self-center self-center ">
          {children}
        </main>
        <FaQLink />
      </body>
    </html>
  )
}
