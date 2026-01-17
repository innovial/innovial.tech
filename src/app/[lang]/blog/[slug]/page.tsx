import { getPost, getPosts } from '@/lib/content';
import { getDictionary } from '@/get-dictionary';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Metadata } from 'next';
import { GradientBlob, GridPattern } from '@/components/ui/Decorations';

export async function generateStaticParams() {
  const postsEn = getPosts('en');
  const postsId = getPosts('id');

  const paramsEn = postsEn.map((post) => ({
    lang: 'en',
    slug: post.slug,
  }));

  const paramsId = postsId.map((post) => ({
    lang: 'id',
    slug: post.slug,
  }));

  return [...paramsEn, ...paramsId];
}

export async function generateMetadata({ params }: { params: { lang: 'en' | 'id', slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug, params.lang);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} - Innovial Blog`,
    description: post.summary,
  };
}

export default async function BlogPost({ params }: { params: { lang: 'en' | 'id', slug: string } }) {
  const post = await getPost(params.slug, params.lang);
  const dict = await getDictionary(params.lang);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative pt-32 pb-20 min-h-screen overflow-hidden">
        {/* Background Decorations */}
        <div className="fixed inset-0 bg-white -z-30"></div>
        <GridPattern opacity={0.03} />
        <GradientBlob className="top-0 right-0 w-[500px] h-[500px] bg-primary/10 translate-x-[20%] translate-y-[-20%]" />
        
      <article className="container relative z-10 mx-auto px-6 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {params.lang === 'id' ? 'Kembali ke Blog' : 'Back to Blog'}
        </Link>
        
        <header className="mb-12 text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-primary text-sm font-semibold mb-6">
                 <Calendar className="w-4 h-4" />
                 {post.date}
            </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark mb-6 leading-tight tracking-tight">{post.title}</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">{post.summary}</p>
        </header>

        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
             <div 
                className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-dark prose-a:text-primary hover:prose-a:text-accent mx-auto"
                dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}
            />
        </div>
      </article>
    </div>
  );
}
