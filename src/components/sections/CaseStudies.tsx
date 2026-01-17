"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/lib/content';
import { ArrowRight, Target, Lightbulb, TrendingUp } from 'lucide-react';

export function CaseStudies({ dict, projects }: { dict: any, projects: Project[] }) {
  return (
    <section id="case-studies" className="relative bg-white overflow-hidden">
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
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">{dict.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </motion.div>
        
        <div className="space-y-24">
          {projects.map((study, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div 
                key={study.slug} 
                className="group grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={study.image}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                    {study.category}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-dark mb-6 group-hover:text-accent transition-colors">
                    {study.title}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-sm uppercase tracking-wide mb-1">{dict.labels.challenge}</h4>
                        <p className="text-gray-600 text-sm">{study.challenge}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-sm uppercase tracking-wide mb-1">{dict.labels.solution}</h4>
                        <p className="text-gray-600 text-sm">{study.solution}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark text-sm uppercase tracking-wide mb-1">{dict.labels.outcome}</h4>
                        <p className="text-gray-600 text-sm">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/portfolio/${study.slug}`} 
                    className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    {dict.cta}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}