"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Code2, Smartphone, Palette } from 'lucide-react'

export function Hero({ dict }: { dict: any }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.png" 
          alt="" 
          fill 
          className="object-cover opacity-40"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
      </div>
      
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px] animate-pulse"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                {dict.badge}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                {dict.title_start}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-purple-400">
                  {dict.title_highlight}
                </span>
                <br />
                {dict.title_end}
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {dict.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <Link href="#services" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all duration-300">
                {dict.cta_primary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#contact" className="group flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-full hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                <Play className="w-4 h-4" />
                {dict.cta_secondary}
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
            >
              {[
                { icon: Code2, label: 'Web Apps' },
                { icon: Smartphone, label: 'Mobile' },
                { icon: Palette, label: 'UI/UX' },
              ].map((item, i) => (
                <div key={item.label} className="flex items-center gap-2 text-gray-400">
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-purple-500/30 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8">
                <Image 
                  src="/images/web-dev.png" 
                  alt="Web Development" 
                  width={600} 
                  height={450} 
                  unoptimized
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute bottom-4 left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">100+ Projects</p>
                    <p className="text-xs text-gray-500">Successfully Delivered</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-4 right-4 bg-gradient-to-br from-accent to-blue-600 rounded-2xl p-4 shadow-xl text-white"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold">5+</p>
                  <p className="text-xs opacity-80">Years Exp.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  )
}
