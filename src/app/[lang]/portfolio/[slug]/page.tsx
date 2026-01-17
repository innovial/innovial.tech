import { getProject, getProjects } from '@/lib/content';
import { getDictionary } from '@/get-dictionary';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import { GradientBlob, GridPattern } from '@/components/ui/Decorations';

export async function generateStaticParams() {
  const projectsEn = getProjects('en');
  const projectsId = getProjects('id');

  const paramsEn = projectsEn.map((project) => ({
    lang: 'en',
    slug: project.slug,
  }));

  const paramsId = projectsId.map((project) => ({
    lang: 'id',
    slug: project.slug,
  }));

  return [...paramsEn, ...paramsId];
}

export async function generateMetadata({ params }: { params: { lang: 'en' | 'id', slug: string } }): Promise<Metadata> {
  const project = await getProject(params.slug, params.lang);
  if (!project) return { title: 'Not Found' };
  
  return {
    title: `${project.title} - Innovial Portfolio`,
    description: project.challenge,
  };
}

export default async function ProjectPage({ params }: { params: { lang: 'en' | 'id', slug: string } }) {
  const project = await getProject(params.slug, params.lang);
  const dict = await getDictionary(params.lang);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative pt-32 pb-20 min-h-screen overflow-hidden">
        {/* Background Decorations */}
        <div className="fixed inset-0 bg-white -z-30"></div>
        <GridPattern opacity={0.03} />
        <GradientBlob className="top-20 right-0 w-[600px] h-[600px] bg-blue-400/10 translate-x-[30%]" />
        <GradientBlob className="bottom-0 left-0 w-[500px] h-[500px] bg-purple-400/10 -translate-x-[20%]" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
         <Link href="/#case-studies" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {params.lang === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="flex flex-col justify-center">
             <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-bold tracking-wider uppercase text-xs rounded-full w-fit mb-6 border border-accent/20">{project.category}</span>
             <h1 className="text-4xl md:text-5xl font-extrabold text-dark mb-8 leading-tight">{project.title}</h1>
             
             <div className="space-y-8">
               <div className="pl-6 border-l-4 border-gray-200 hover:border-primary transition-colors duration-300">
                 <h3 className="font-bold text-dark text-lg mb-2">{dict.caseStudies.labels.challenge}</h3>
                 <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
               </div>
               <div className="pl-6 border-l-4 border-gray-200 hover:border-primary transition-colors duration-300">
                 <h3 className="font-bold text-dark text-lg mb-2">{dict.caseStudies.labels.solution}</h3>
                 <p className="text-gray-600 leading-relaxed">{project.solution}</p>
               </div>
               <div className="pl-6 border-l-4 border-gray-200 hover:border-primary transition-colors duration-300">
                 <h3 className="font-bold text-dark text-lg mb-2">{dict.caseStudies.labels.outcome}</h3>
                 <p className="text-gray-600 leading-relaxed">{project.outcome}</p>
               </div>
             </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-2xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 transform rotate-3 scale-95"></div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
            </div>
          </div>
        </div>

        {/* Extended content from Markdown */}
        <div className="border-t border-gray-100 pt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{params.lang === 'id' ? 'Detail Proyek' : 'Project Details'}</h2>
            <div 
              className="prose prose-lg prose-slate prose-img:rounded-xl mx-auto max-w-4xl"
              dangerouslySetInnerHTML={{ __html: project.htmlContent || '' }}
            />
        </div>
      </div>
    </div>
  );
}
