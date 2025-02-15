import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'

import Container from '@/app/components/container'
import StoreProvider from '@/app/components/providers/store'
import ThemeProvider from '@/app/components/providers/theme'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Think Easy Blog',
  description: 'Think easy test task',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>
          <ThemeProvider>
            <Container>{children}</Container>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
