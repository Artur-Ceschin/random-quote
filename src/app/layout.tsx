import { ReactNode } from 'react'
import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata = {
  title: 'Random Quotes',
  description: 'Generate a random quote',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans`}>{children}</body>
    </html>
  )
}
