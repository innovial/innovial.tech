import Link from 'next/link';
import { getPosts } from '@/lib/content';
import { getDictionary } from '@/get-dictionary';
import { Metadata } from 'next';
import { GradientBlob, GridPattern } from '@/components/ui/Decorations';

export const metadata: Metadata = {
  title: 'Blog - Innovial',
  description: 'Insights and articles about technology and business.',
}

export default async function BlogIndex({ params }: { params: { lang: 'en' | 'id' } }) {
  const dict = await getDictionary(params.lang)
  const posts = getPosts(params.lang)

  return (
    <div className="relative pt-32 pb-20 min-h-screen overflow-hidden">
      {/* Background Decorations */}
      <div className="fixed inset-0 bg-light -z-30"></div>
      <GridPattern opacity={0.05} />
      <GradientBlob className="top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 translate-x-[-30%] translate-y-[-30%]" />
      <GradientBlob className="bottom-0 right-0 w-[600px] h-[600px] bg-purple-400/20 translate-x-[30%] translate-y-[30%]" />
      <GradientBlob className="top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-300/10 -translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">{dict.blog.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{dict.blog.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="group bg-white/60 backdrop-blur-sm border border-white/50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">Article</span>
                    <p className="text-xs text-gray-500">{post.date}</p>
                </div>
                <h3 className="text-2xl font-bold text-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 line-clamp-3 leading-relaxed">{post.summary}</p>
              </div>
              <Link href={`/blog/${post.slug}`} className="text-primary font-bold mt-6 inline-flex items-center group-hover:gap-2 transition-all">
                {dict.blog.read_more} <span className="ml-1 text-lg">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
