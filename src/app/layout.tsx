import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import {ToastContainer} from 'react-toastify'

import Container from '@/app/components/container'
import AppMenu from '@/app/components/menu'
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
            <AppMenu />
            <Container>{children}</Container>
            <ToastContainer hideProgressBar />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
