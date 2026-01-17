"use client"

import { motion } from 'framer-motion';
import { Target, Sparkles, Award, Zap } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '99%', label: 'Client Satisfaction' },
];

export function About({ dict }: { dict: any }) {
  return (
    <section id="about" className="relative bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '48px 48px' }}>
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
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">{dict.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-accent/30">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4 pt-4">{dict.mission_title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {dict.mission_desc}
              </p>
            </div>
            
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-6 pt-4">{dict.values_title}</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-dark">{dict.values.quality.label}:</strong>
                    <span className="text-gray-600 ml-1">{dict.values.quality.text}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-dark">{dict.values.transparency.label}:</strong>
                    <span className="text-gray-600 ml-1">{dict.values.transparency.text}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-xl bg-slate-50/80 hover:bg-slate-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-dark">{dict.values.partnership.label}:</strong>
                    <span className="text-gray-600 ml-1">{dict.values.partnership.text}</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300 text-center"
                >
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 mb-2">{stat.value}</p>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-bold text-white">Why Choose Us?</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Fast & reliable delivery</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Modern tech stack</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <Zap className="w-4 h-4 text-accent" />
                    <span>Scalable solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
