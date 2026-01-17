import Link from 'next/link'
import Image from 'next/image'

export function Footer({ dict, navDict }: { dict: any, navDict: any }) {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image 
                src="/logo/full-white.svg" 
                alt="Innovial Logo" 
                width={140} 
                height={40} 
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {dict.description}
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{dict.company}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-white transition-colors">{navDict.about}</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">{navDict.services}</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">{navDict.career}</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">{navDict.contact}</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{dict.services}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold mb-4">{dict.contact}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>hello@innovial.id</li>
              <li>+62 812 3456 7890</li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Innovial. {dict.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">{dict.privacy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{dict.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
