type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
  logo?: string
  tags?: string[]
  resumePoints?: string[]
}

type Education = {
  university: string,
  title: string,
  start: string,
  end: string,
  id: string,
  logo?: string,
  tags?: string[],
  resumePoints?: string[]
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'PayPal',
    title: 'Software Engineer Intern',
    start: 'May 2025',
    end: 'Aug 2025',
    link: 'https://www.paypal.com',
    id: 'paypal-2025',
    logo: '/companies/paypal.png',
    tags: ['Agentic AI', 'Python', 'Springboot'],
    resumePoints: [
      'Built an AI-powered Slackbot that automated query resolution in support channels by leveraging multi-agent workflows, reducing response time for support tickets',
      'Developed an MCP server in Spring Boot, integrated with Claude Code and GitHub Copilot, enabling engineers to investigate live issues directly within their workspace'
    ]
  },
  {
    company: 'Endowus',
    title: 'Software Development Engineer',
    start: 'Jul 2023',
    end: 'Jun 2024',
    link: 'https://www.endowus.com',
    id: 'endowus-2023',
    logo: '/companies/endowus.png',
    tags: ['Scala', 'Akka', 'Kafka'],
    resumePoints: [
      'Optimized a trade file processing backend reducing processing time and boosting throughput',
      'Designed an anomaly detection system to query inconsistent transactions and sending real-time alerts'
    ]
  },
  {
    company: 'Zevi.AI',
    title: 'Artificial Intelligence Engineer Intern',
    start: 'Mar 2022',
    end: 'Aug 2022',
    link: 'https://www.linkedin.com/company/zevi-ai/posts/?feedView=all',
    id: 'zevi-2022',
    logo: '/companies/zevi.jpeg',
    tags: ['PyTorch', 'NLP', 'Production AI'],
    resumePoints: [
      'Engineered a search engine by fine-tuning an LLM on product data with scalable deployment on cloud infrastructure and minimal latency',
      'Crafted a phonetic-based spellcheck algorithm reducing unrecognized multilingual queries and enhancing discovery for regional products'
    ]
  },
]

export const EDUCATION: Education[] = [
  {
    university: 'University of Illinois at Chicago',
    title: 'M.S. Computer Science',
    start: 'Aug 2024',
    end: 'May 2026',
    id: 'uic-2024',
    logo: '/education/uic.png',
    tags: ['Cloud Computing', 'Advanced Machine Learning', 'Compiler Design'],
    resumePoints: [
      'Master of Science in Computer Science',
      'Focus on advanced concepts in Data Science and ML, cloud computing and systems',

    ]
  },
  {
    university: 'International Institute of Information Technology, Hyderabad',
    title: 'B.Tech Computer Science Engineering',
    start: 'Aug 2019',
    end: 'May 2023',
    id: 'iiit-hyderabad-2019',
    logo: '/education/iiith.jpg',
    tags: ['Data Structures and Algorithms', 'Machine Learning Basics', 'Operating Systems', 'Linear Algebra'],
    resumePoints: [
      'Bachelor of Technology in Computer Science Engineering',
      'Graduated with Honors - Research Assistantship focusing on NLP and Computer Vision'
    ]
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Mehul1604',
  },
  {
    label: 'Twitter',
    link: 'https://twitter.com/ibelick',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mehul-mathur-16b13b201/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/ibelick',
  },
]

export const EMAIL = 'your@email.com'
