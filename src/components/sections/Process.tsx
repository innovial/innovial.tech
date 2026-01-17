"use client"

import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react'

const stepIcons = [MessageSquare, Lightbulb, Code, Rocket]
const stepColors = [
  { bg: 'bg-blue-500', shadow: 'shadow-blue-500/30' },
  { bg: 'bg-purple-500', shadow: 'shadow-purple-500/30' },
  { bg: 'bg-pink-500', shadow: 'shadow-pink-500/30' },
  { bg: 'bg-green-500', shadow: 'shadow-green-500/30' },
]

export function Process({ dict }: { dict: any }) {
  return (
    <section id="process" className="relative bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container relative mx-auto px-6 py-24 lg:py-32">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4 border border-accent/20">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">{dict.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-purple-500 to-pink-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-24">
            {dict.steps.map((item: any, index: number) => {
              const Icon = stepIcons[index] || stepIcons[0]
              const colors = stepColors[index] || stepColors[0]
              const isEven = index % 2 === 0
              
              return (
                <motion.div 
                  key={index} 
                  className="relative lg:flex lg:items-center"
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`lg:w-1/2 ${isEven ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:order-2'}`}>
                    <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300">
                      <div className={`lg:hidden w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 shadow-lg ${colors.shadow}`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                        <span className="text-accent">{String(index + 1).padStart(2, '0')}.</span> {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg ${colors.shadow} transform hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className={`hidden lg:block lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
