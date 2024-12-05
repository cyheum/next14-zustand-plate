import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { InitialFetch } from '@/components'
import { StyledComponentsRegistry } from '@/lib'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finger books',
  description: 'Finger books',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='kr'
      suppressHydrationWarning
    >
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
          sizes='any'
        />
        <link
          rel='preload'
          as='style'
          crossOrigin='anonymous'
          href='https://cdn.jsdelivr.net/gh/wanteddev/wanted-sans@v1.0.3/packages/wanted-sans/fonts/webfonts/variable/split/WantedSansVariable.min.css'
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <InitialFetch />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
