export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  github: string
  problem?: string
  approach?: string
  architecture?: string
  learnings?: string
}
export const projects: Project[] = [
  {
    slug: 'backbuddy',
    title: 'BackBuddy',
    description: 'Posture and back health assistant application focused on user habit correction and awareness.',
    tech: ['React', 'TypeScript'],
    github: 'https://github.com/arch5d/backbuddy'
  },
  {
    slug: 'ai-content-verifier',
    title: 'AI Content Verifier',
    description: 'AI-powered verification tool to detect manipulated or AI-generated content.',
    tech: ['Python', 'TensorFlow'],
    github: 'https://github.com/arch5d/ai-content-verifier'
  },
  {
    slug: 'crime-rate-analysis',
    title: 'Crime Rate Analysis',
    description: 'Data-driven crime trend analysis and visualization system using structured datasets.',
    tech: ['Python', 'Pandas', 'D3.js'],
    github: 'https://github.com/arch5d/crime-rate-analysis'
  }
];

export const skills = {
  'Web Development': ['React.js', 'JavaScript', 'Next.js', 'Tailwind CSS'],
  'Full Stack Development': ['React.js', 'JavaScript', 'Node.js', 'REST APIs', 'Databases'],
  'AI & Intelligent Systems': ['LLM workflows', 'Prompt architecture', 'Evaluation loops', 'Retrieval pipelines'],
  'Cybersecurity & Systems': ['Authentication design', 'Threat modeling', 'Security baselines', 'API hardening'],
  'Blockchain / Web3': ['Smart contracts', 'Wallet integrations', 'DApp UX', 'On-chain identity']
};

export const journalPosts = [
  {
    slug: 'designing-multi-agent-workflows-with-llm-apis',
    title: 'Designing Multi-Agent Workflows with LLM APIs',
    description: 'A practical structure for splitting reasoning, retrieval, and execution into reliable agents.',
    category: 'AI Systems',
    date: '2026-02-16',
    readingTime: '7 min read'
  },
  {
    slug: 'structuring-authentication-in-hackathon-projects',
    title: 'Structuring Authentication in Hackathon Projects',
    description: 'How to ship secure auth quickly without sacrificing product velocity in short builds.',
    category: 'Security',
    date: '2026-01-27',
    readingTime: '6 min read'
  },
  {
    slug: 'why-i-build-across-ai-security-and-web3',
    title: 'Why I Build Across AI, Security, and Web3',
    description: 'Interdisciplinary building has shaped how I think about robust, creative systems.',
    category: 'Builder Mindset',
    date: '2026-01-10',
    readingTime: '5 min read'
  }
];

export const experiments = [
  {
    slug: 'bizpilot-ai',
    title: 'BizPilot AI',
    description: 'Multi-agent AI business automation system including marketing, finance, and operations agents.'
  },
  {
    slug: 'trustlayer',
    title: 'TrustLayer',
    description: 'Hackathon security tool detecting fake domains, phishing emails, deepfakes, and AI-generated threats.'
  }
];
