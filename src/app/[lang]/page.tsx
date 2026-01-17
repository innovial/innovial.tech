import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogHighlight } from "@/components/sections/BlogHighlight";
import { getDictionary } from '@/get-dictionary'
import { getPosts, getProjects } from "@/lib/content";

export default async function Home({ params }: { params: { lang: 'en' | 'id' } }) {
  const dict = await getDictionary(params.lang)
  const posts = getPosts(params.lang)
  const projects = getProjects(params.lang)

  return (
    <>
      <Hero dict={dict.hero} />
      <About dict={dict.about} />
      <Services dict={dict.services} />
      <Process dict={dict.process} />
      <CaseStudies dict={dict.caseStudies} projects={projects} />
      <Testimonials dict={dict.testimonials} />
      <BlogHighlight dict={dict.blog} posts={posts} />
    </>
  );
}
