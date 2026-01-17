'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ currentLang }: { currentLang: 'en' | 'id' }) {
  const pathname = usePathname()
  
  const redirectedPathName = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-2 text-sm font-medium border-l border-gray-200 pl-4 ml-4">
      <Link 
        href={redirectedPathName('id')} 
        className={cn(
          "transition-colors hover:text-primary",
          currentLang === 'id' ? 'text-primary font-bold' : 'text-gray-400'
        )}
      >
        ID
      </Link>
      <span className="text-gray-300">|</span>
      <Link 
        href={redirectedPathName('en')} 
        className={cn(
          "transition-colors hover:text-primary",
          currentLang === 'en' ? 'text-primary font-bold' : 'text-gray-400'
        )}
      >
        EN
      </Link>
    </div>
  )
}
