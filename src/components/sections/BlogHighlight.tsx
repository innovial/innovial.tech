"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Post } from '@/lib/content';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export function BlogHighlight({ dict, posts }: { dict: any, posts: Post[] }) {
  return (
    <section id="blog" className="relative bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" 
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
            Blog & Insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">{dict.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{dict.subtitle}</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.slice(0, 2).map((post, index) => (
            <motion.div 
              key={post.slug} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300 h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{post.summary}</p>
                  
                  <span className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    {dict.read_more}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/25 hover:bg-primary-focus hover:-translate-y-1 transition-all duration-300"
          >
            {dict.view_all}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
