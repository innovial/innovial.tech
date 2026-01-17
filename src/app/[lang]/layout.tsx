import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import '../globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { getDictionary } from '@/get-dictionary'

export const metadata: Metadata = {
  title: 'Innovial - Software House',
  description: 'Membawa Inovasi Digital ke Bisnis Anda.',
  icons: {
    icon: '/logo/icon-color.svg',
  },
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'id' }]
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: 'en' | 'id' }
}) {
  const dict = await getDictionary(params.lang)
  
  return (
    <html lang={params.lang} className="scroll-smooth">
      <body className={`${GeistSans.variable} font-sans antialiased bg-light text-dark`}>
        <Navbar dict={dict.nav} lang={params.lang} />
        <main>{children}</main>
        <Footer dict={dict.footer} navDict={dict.nav} />
      </body>
    </html>
  )
}
