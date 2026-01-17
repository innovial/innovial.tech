import { Code2, Smartphone, Palette, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const icons = [Code2, Smartphone, Palette]
const colors = ['text-blue-500', 'text-purple-500', 'text-pink-500']
const bgs = ['bg-blue-50', 'bg-purple-50', 'bg-pink-50']

export function Services({ dict }: { dict: any }) {
  return (
    <section id="services" className="bg-light py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{dict.title}</h2>
          <p className="text-gray-600 text-lg">{dict.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.items.map((service: any, index: number) => {
            const Icon = icons[index]
            return (
              <div key={service.title} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/10 transition-all duration-300">
                <div className={`w-14 h-14 ${bgs[index]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${colors[index]}`} />
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <Link href="#contact" className="inline-flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all">
                  {dict.cta} <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
