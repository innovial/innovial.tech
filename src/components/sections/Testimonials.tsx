"use client"

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

export function Testimonials({ dict }: { dict: any }) {
  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px]"></div>

      <div className="container relative mx-auto px-6 py-24 lg:py-32">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-4 border border-accent/30">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{dict.title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.items.map((testimonial: any, index: number) => (
            <motion.div 
              key={index} 
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-300">
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-accent">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
