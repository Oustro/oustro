import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Oustro',
  description: 'A creative collective that makes unique software for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
