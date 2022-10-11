import type { MarkdownInstance } from 'astro'

export interface Frontmatter {
  draft?: boolean
  title: string
  description?: string
  author?: string
  publishDate: string
  coverSVG?: string
  coverImage?: string
  socialImage?: string
  categories?: string[]
  tags?: string[]
  file?: string
  url?: string
  minutesRead?: string
  extra?: string[]
  section?: string[]
}

export interface TagType {
  tag: string
  count: number
  pages: MarkdownInstance<Frontmatter>[]
}

export const SiteMetadata = {
  title: 'Codereli',
  description: 'Contact Codereli for all your small business technology needs.',
  author: {
    name: 'Salman Khattak',
    twitter: '@khattaksd',
    url: 'https://codereli.com',
    email: 'salman@codereli.com',
    summary: '',
  },
  org: {
    name: 'Codereli',
    twitter: '@codereli',
    url: 'https://codereli.com',
    email: 'info@codereli.com',
    summary:
      'Codereli is a managed systems consulting firm. We specialise in Business and IT strategies, operating models, strategic roadmaps, enterprise architecture, analytics and business process design.',
  },
  location: '110 James St, St. Catharines, ON L2R 7E8',
  latlng: [43.1600375, -79.2465686] as [number, number],
  repository: 'https://github.com/khattaksd/codereli',
  social: [
    {
      name: 'Email',
      link: 'mailto:info@codereli.com',
      icon: 'envelope',
    },
    {
      name: 'Phone',
      link: '555-5555',
      icon: 'telephone',
    },
    // {
    //   name: 'LinkedIn',
    //   link: 'https://www.linkedin.com/coderelicom',
    //   icon: 'linkedin',
    // },
    // {
    //   name: 'Facebook',
    //   link: 'https://www.facebook.com/coderelicom',
    //   icon: 'facebook',
    // },
    // {
    //   name: 'Instagram',
    //   link: 'https://www.instagram.com/coderelicom',
    //   icon: 'instagram',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/coderelicom',
    //   icon: 'twitter',
    // },
    // {
    //   name: 'Github',
    //   link: 'https://github.com/coderelicom',
    //   icon: 'github',
    // },
  ],
  buildTime: new Date().toString(),
}

export const Logo = '../svg/astro/logomark-light.svg'
export const LogoImage = '../images/astro/full-logo-light.png'
export const FeaturedSVG = '../svg/undraw/undraw_design_inspiration.svg'
export const DefaultSVG = '../svg/undraw/undraw_my_feed.svg'
export const DefaultImage = '../images/undraw/undraw_my_feed.png'

export const NavigationLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Contact', href: 'contact' },
  { name: 'Blog', href: 'blog' },
  { name: 'Docs', href: 'doc/introduction' },
]

export const CategoryDetail = [
  {
    category: 'instructions',
    coverSVG: '../svg/undraw/undraw_instruction_manual.svg',
    socialImage: '../images/undraw/undraw_instruction_manual.png',
    description: 'Guidelines on using this starter.'
  },
  {
    category: 'information',
    coverSVG: '../svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Information articles.'
  },
]

export function categoryDetail(category: string | undefined) {
  const details = CategoryDetail.filter(cat => cat.category == category)

  if (details.length == 1) {
    return details[0]
  }
  return {
    category: 'General',
    coverSVG: '../svg/undraw/undraw_instant_information.svg',
    socialImage: '../images/undraw/undraw_instant_information.png',
    description: 'Category ' + category,
  }
}
export const AuthorDetail = [
  {
    name: 'Salman Khattak',
    description: 'Chief Technology Officer CTO',
    contact: 'salman@codereli.com',
    image: '../images/authors/default.png'
  }
]

export const DefaultAuthor = {
  name: 'Default Author',
  image: '../images/authors/default.png',
  contact: 'info@codereli.com',
  description: 'Astronaut'
}

export function authorDetail(author: string | undefined) {
  const details = AuthorDetail.filter(person => person.name == author)

  if (details.length == 1) {
    return details[0]
  }
  return DefaultAuthor
}

export const PAGE_SIZE = 6

export const GITHUB_EDIT_URL = `https://github.com/khattaksd/codereli`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

export type Sidebar = Record<string, { text: string; link: string }[]>

export const SIDEBAR: Sidebar = {
  'Section Header': [
    { text: 'Introduction', link: 'doc/introduction' },
    { text: 'Page 2', link: 'doc/page-2' },
    { text: 'Page 3', link: 'doc/page-3' },
  ],
  'Another Section': [{ text: 'Page 4', link: 'doc/page-4' }],
}
