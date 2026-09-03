import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yohannes — Backend Software Engineer',
  description:
    'Yohannes — Backend Software Engineer specializing in NestJS, Fastify, Node.js, PostgreSQL, MongoDB, Prisma, and scalable backend systems.',

  icons: {
    icon: '/placeholder-logo.jpg',
    shortcut: '/placeholder-logo.jpg',
    apple: '/placeholder-logo.jpg',
  },

  openGraph: {
    title: 'Yohannes — Backend Software Engineer',
    description: 'Systems that hold up.',
    type: 'website',
    siteName: 'Yohannes',
    images: ['/placeholder-logo.jpg'],
  },

  twitter: {
    card: 'summary',
    title: 'Yohannes — Backend Software Engineer',
    description: 'Systems that hold up.',
    images: ['/placeholder-logo.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d1110',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}