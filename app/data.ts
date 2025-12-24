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

type Publication = {
  title: string
  description: string
  link: string
  uid: string
  journal?: string
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
      'University of Illinois at Chicago',
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
      'International Institute of Information Technology, Hyderabad',
      'Graduated with Honors - Research Assistantship focusing on NLP and Computer Vision'
    ]
  }
]

export const PUBLICATIONS: Publication[] = [
  {
    title: 'TweetBoost: Influence of Social Media on NFT Valuation',
    description: 'Investigated how social media activity influences NFT valuation by linking large-scale Twitter data with OpenSea marketplace records. Performed feature engineering across social and platform signals, trained XGBoost and other classification models, and conducted statistical analyses to identify key predictors of NFT value and virality.',
    link: 'https://dl.acm.org/doi/10.1145/3487553.3524642',
    uid: 'pub-1',
    journal: 'ACM (Proceedings of the Web Conference 2022 – Companion)',
  },
  {
    title: 'Co-WIN: Really Winning? Analysing Inequity in India’s Vaccination Response',
    description: 'Studied systemic inequities in India’s COVID-19 vaccination response through large-scale analysis of Co-WIN and auxiliary public datasets. Performed feature engineering and geospatial data processing, ran machine learning models, and conducted statistical hypothesis testing to measure the effects of policy changes and uncover regional and demographic disparities.',
    link: 'https://arxiv.org/abs/2202.04433',
    uid: 'pub-2',
    journal: 'arXiv:2202.04433, Computers and Society (cs.CY), 2022',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Mehul1604',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/mehulma67701972',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mehul-mathur-16b13b201/',
  },
  {
    label: 'Instagram',
    link: 'https://ig.me/m/_mehul_mathur_',
  },
]

export const EMAIL = 'your@email.com'
