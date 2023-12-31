import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import React from 'react'

export const metadata: Metadata = {
  title: 'Todo list',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
