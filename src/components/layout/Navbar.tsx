import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar({ dict, lang }: { dict: any, lang: 'en' | 'id' }) {
  const navLinks = [
    { href: "#about", label: dict.about },
    { href: "#services", label: dict.services },
    { href: "#process", label: dict.process },
    { href: "#case-studies", label: dict.caseStudies },
  ]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      "bg-white/80 backdrop-blur-md border-b border-gray-100"
    )}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href={`/${lang}`} className="hover:opacity-80 transition-opacity">
          <Image
            src="/logo/full-color.svg"
            alt="Innovial Logo"
            width={140}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className="text-gray-600 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href="#contact" 
            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-primary-focus transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5"
          >
            {dict.contact}
          </Link>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </nav>
    </header>
  )
}
