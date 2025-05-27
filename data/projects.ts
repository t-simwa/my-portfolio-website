export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  category: 'web' | 'mobile' | 'backend' | 'frontend';
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'AI-Powered Code Review Assistant',
    description: 'An intelligent code review system that uses machine learning to analyze code quality, suggest improvements, and detect potential bugs before they reach production.',
    logo: '/logos/ai.svg',
    link: 'https://github.com/yourusername/ai-code-review',
    slug: 'ai-code-review',
    category: 'backend',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'PostgreSQL', 'Docker'],
    features: [
      'Real-time code analysis',
      'Automated bug detection',
      'Code quality scoring',
      'Integration with GitHub/GitLab',
      'Customizable review rules'
    ],
    github: 'https://github.com/yourusername/ai-code-review',
    demo: 'https://ai-code-review-demo.com'
  },
  {
    title: 'Real-time Collaborative IDE',
    description: 'A browser-based IDE that enables real-time collaboration between developers, featuring live code sharing, pair programming, and integrated chat.',
    logo: '/logos/ide.svg',
    link: 'https://github.com/yourusername/collab-ide',
    slug: 'collab-ide',
    category: 'web',
    technologies: ['TypeScript', 'React', 'WebSocket', 'Monaco Editor', 'Node.js'],
    features: [
      'Real-time code synchronization',
      'Multiple cursor support',
      'Integrated chat system',
      'File tree management',
      'Git integration'
    ],
    github: 'https://github.com/yourusername/collab-ide',
    demo: 'https://collab-ide-demo.com'
  },
  {
    title: 'Smart Home Automation Platform',
    description: 'A comprehensive IoT platform for home automation that learns user patterns and optimizes energy consumption while providing seamless device control.',
    logo: '/logos/smart-home.svg',
    link: 'https://github.com/yourusername/smart-home-platform',
    slug: 'smart-home-platform',
    category: 'mobile',
    technologies: ['React Native', 'Node.js', 'MQTT', 'MongoDB', 'TensorFlow Lite'],
    features: [
      'AI-powered automation',
      'Energy usage optimization',
      'Cross-platform mobile app',
      'Voice control integration',
      'Real-time device monitoring'
    ],
    github: 'https://github.com/yourusername/smart-home-platform',
    demo: 'https://smart-home-demo.com'
  },
  {
    title: 'Advanced E-commerce Platform',
    description: 'A high-performance e-commerce platform with real-time inventory management, advanced search, and personalized recommendations.',
    logo: '/logos/ecommerce.svg',
    link: 'https://github.com/yourusername/advanced-ecommerce',
    slug: 'advanced-ecommerce',
    category: 'web',
    technologies: ['Next.js', 'GraphQL', 'Redis', 'PostgreSQL', 'Elasticsearch'],
    features: [
      'Real-time inventory tracking',
      'Advanced search with filters',
      'Personalized recommendations',
      'Multi-currency support',
      'Analytics dashboard'
    ],
    github: 'https://github.com/yourusername/advanced-ecommerce',
    demo: 'https://ecommerce-demo.com'
  },
  {
    title: 'Distributed Task Queue System',
    description: 'A scalable distributed task queue system for handling background jobs, with real-time monitoring and automatic scaling capabilities.',
    logo: '/logos/queue.svg',
    link: 'https://github.com/yourusername/distributed-queue',
    slug: 'distributed-queue',
    category: 'backend',
    technologies: ['Go', 'Redis', 'gRPC', 'Kubernetes', 'Prometheus'],
    features: [
      'Horizontal scaling',
      'Priority queues',
      'Dead letter queues',
      'Real-time monitoring',
      'Automatic failover'
    ],
    github: 'https://github.com/yourusername/distributed-queue',
    demo: 'https://queue-system-demo.com'
  },
  {
    title: 'Interactive Data Visualization Dashboard',
    description: 'A powerful data visualization platform that transforms complex datasets into interactive, insightful visualizations with real-time updates.',
    logo: '/logos/dashboard.svg',
    link: 'https://github.com/yourusername/data-viz-dashboard',
    slug: 'data-viz-dashboard',
    category: 'frontend',
    technologies: ['React', 'D3.js', 'TypeScript', 'WebSocket', 'Tailwind CSS'],
    features: [
      'Real-time data updates',
      'Custom visualization types',
      'Interactive filtering',
      'Export capabilities',
      'Responsive design'
    ],
    github: 'https://github.com/yourusername/data-viz-dashboard',
    demo: 'https://data-viz-demo.com'
  },
  {
    title: 'Cross-platform Mobile App Framework',
    description: 'A custom mobile app framework that enables building high-performance native apps with a single codebase, featuring advanced animations and native modules.',
    logo: '/logos/mobile.svg',
    link: 'https://github.com/yourusername/mobile-framework',
    slug: 'mobile-framework',
    category: 'mobile',
    technologies: ['TypeScript', 'React Native', 'Swift', 'Kotlin', 'C++'],
    features: [
      'Native performance',
      'Custom animations',
      'Platform-specific modules',
      'Hot reloading',
      'Built-in testing'
    ],
    github: 'https://github.com/yourusername/mobile-framework',
    demo: 'https://mobile-framework-demo.com'
  },
  {
    title: 'Microservices Architecture Template',
    description: 'A production-ready microservices template with built-in service discovery, load balancing, and monitoring capabilities.',
    logo: '/logos/microservices.svg',
    link: 'https://github.com/yourusername/microservices-template',
    slug: 'microservices-template',
    category: 'backend',
    technologies: ['Node.js', 'Docker', 'Kubernetes', 'gRPC', 'Prometheus'],
    features: [
      'Service discovery',
      'Load balancing',
      'Circuit breaking',
      'Distributed tracing',
      'Health monitoring'
    ],
    github: 'https://github.com/yourusername/microservices-template',
    demo: 'https://microservices-demo.com'
  }
];
