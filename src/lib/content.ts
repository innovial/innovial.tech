import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDirectory = path.join(process.cwd(), 'src/content')

export interface Post {
  slug: string
  title: string
  summary: string
  date: string
  image?: string
  content: string
  htmlContent?: string
}

export interface Project {
  slug: string
  title: string
  category: string
  challenge: string
  solution: string
  outcome: string
  image: string
  date: string
  content: string
  htmlContent?: string
}

export function getPosts(lang: 'en' | 'id'): Post[] {
  const dir = path.join(contentDirectory, 'blog', lang)
  
  if (!fs.existsSync(dir)) {
    return []
  }

  const fileNames = fs.readdirSync(dir)
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(dir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...(data as any),
    } as Post
  })

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string, lang: 'en' | 'id'): Promise<Post | null> {
  const fullPath = path.join(contentDirectory, 'blog', lang, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const htmlContent = processedContent.toString()

  return {
    slug,
    content,
    htmlContent,
    ...(data as any),
  } as Post
}

export function getProjects(lang: 'en' | 'id'): Project[] {
  const dir = path.join(contentDirectory, 'projects', lang)
  
  if (!fs.existsSync(dir)) {
    return []
  }

  const fileNames = fs.readdirSync(dir)
  const allProjects = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(dir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      content,
      ...(data as any),
    } as Project
  })

  return allProjects.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getProject(slug: string, lang: 'en' | 'id'): Promise<Project | null> {
  const fullPath = path.join(contentDirectory, 'projects', lang, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(content)
  const htmlContent = processedContent.toString()

  return {
    slug,
    content,
    htmlContent,
    ...(data as any),
  } as Project
}
