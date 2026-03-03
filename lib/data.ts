export const projects = [
  {
    slug: 'agent-orchestration-lab',
    title: 'Agent Orchestration Lab',
    description: 'A modular sandbox for running multi-agent task pipelines with traceable decision graphs.',
    tech: ['Next.js', 'TypeScript', 'LLM APIs', 'Redis'],
    github: 'https://github.com/arch5d',
    problem: 'Testing prompt chains at scale is messy without observability.',
    approach: 'Built an orchestration layer with reusable agent roles and logging hooks.',
    architecture: 'Client UI → API routes → agent coordinator → vector memory store.',
    learnings: 'Strong schema validation matters more than prompt cleverness.'
  },
  {
    slug: 'secure-auth-blueprint',
    title: 'Secure Auth Blueprint',
    description: 'Reference implementation for hackathon-ready auth with role scopes and audit events.',
    tech: ['Node.js', 'JWT', 'PostgreSQL', 'Zod'],
    github: 'https://github.com/arch5d',
    problem: 'Hackathon apps often ship insecure and brittle login flows.',
    approach: 'Designed secure defaults with refresh-token rotation and route guard middleware.',
    architecture: 'Auth service + DB sessions + signed token layer + frontend guards.',
    learnings: 'Security is easiest when modeled early in the data schema.'
  },
  {
    slug: 'threat-monitor-lite',
    title: 'Threat Monitor Lite',
    description: 'A lightweight dashboard for parsing logs and spotting suspicious activity patterns.',
    tech: ['Python', 'FastAPI', 'Tailwind', 'SQLite'],
    github: 'https://github.com/arch5d',
    problem: 'Raw log files make anomaly review tedious for small teams.',
    approach: 'Created parser jobs and signal scoring heuristics for quick triage.',
    architecture: 'Collector jobs → scoring engine → dashboard widgets and filters.',
    learnings: 'Simple risk rules with strong UX outperform opaque ML early on.'
  },
  {
    slug: 'web3-identity-prototype',
    title: 'Web3 Identity Prototype',
    description: 'Prototype for wallet-linked identity attestations across student communities.',
    tech: ['Solidity', 'Hardhat', 'React', 'Ethers.js'],
    github: 'https://github.com/arch5d',
    problem: 'Community credentials are fragmented across platforms.',
    approach: 'Built smart-contract attestations with a minimal verification portal.',
    architecture: 'Contract layer + signer service + frontend verification app.',
    learnings: 'On-chain trust requires excellent off-chain UX for adoption.'
  }
];

export const skills = {
  'AI & Intelligent Systems': ['LLM workflows', 'Prompt architecture', 'Evaluation loops', 'Retrieval pipelines'],
  'Cybersecurity & Systems': ['Authentication design', 'Threat modeling', 'Security baselines', 'API hardening'],
  'Web & Full Stack': ['Next.js', 'TypeScript', 'REST APIs', 'Databases', 'Responsive UI'],
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
