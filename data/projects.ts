export interface Project {
  title: string;
  description: string;
  logo: string;
  image: string;
  link: string;
  slug: string;
  category: 'sites' | 'web' | 'mobile' | 'ai' | 'cloud';
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: 'Simca Cleaning Website',
    description: 'A responsive website for Simca Cleaning Company, a Nairobi-based SME, featuring service listings, booking forms, client testimonials, and an interactive map for service areas, designed to increase client inquiries and streamline bookings.',
    logo: '/logos/cleaning.svg',
    image: '/images/projects/simca-cleaning-preview.png',
    link: 'https://github.com/yourusername/simca-cleaning',
    slug: 'simca-cleaning',
    category: 'sites',
    technologies: ['Next.js 15.2.4', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'React Hook Form', 'Zod', 'Framer Motion', 'Leaflet', 'Recharts', 'Next Themes'],
    features: [
      'Responsive design for all devices',
      'Interactive service area mapping',
      'Online booking system',
      'Client testimonials showcase',
      'Service listings with detailed information',
      'Dark/light theme support'
    ],
    github: 'https://github.com/yourusername/simca-cleaning',
    demo: 'https://simca-cleaning.com'
  },
  {
    title: 'My Portfolio Website',
    description: 'A personal portfolio website built with Next.js and TypeScript to showcase my projects, skills, and experience. Features a modern UI, responsive design, and dynamic project filtering.',
    logo: '/logos/portfolio.svg',
    image: '/images/projects/portfolio-site-preview.png',
    link: 'https://github.com/yourusername/my-portfolio-website',
    slug: 'portfolio-website',
    category: 'sites',
    technologies: [
      'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Vercel', 'GitHub Actions'
    ],
    features: [
      'Modern responsive UI',
      'Dynamic project filtering',
      'Dark/light theme support',
      'SEO optimized',
      'Deployed on Vercel',
      'Open source'
    ],
    github: 'https://github.com/yourusername/my-portfolio-website',
    demo: 'https://your-portfolio-demo.com'
  },
  {
    title: ' ShopHub E-Commerce Platform',
    description: 'A full-stack e-commerce platform for small businesses with real-time inventory tracking, payment processing, and analytics dashboard.',
    logo: '/logos/ecommerce.svg',
    image: '/images/projects/simca-cleaning-preview.png',
    link: 'https://github.com/yourusername/ecommerce-platform',
    slug: 'ecommerce-platform',
    category: 'web',
    technologies: ['React.js 18+', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Socket.io-client', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'AWS', 'Docker', 'JWT'],
    features: [
      'Real-time inventory tracking',
      'Payment processing integration',
      'Analytics dashboard',
      'User authentication & authorization',
      'Responsive design',
      'Docker containerization'
    ],
    github: 'https://github.com/yourusername/ecommerce-platform',
    demo: 'https://ecommerce-platform-demo.com'
  },
  {
    title: 'M-Pesa Payment Gateway Dashboard',
    description: 'A web app for Kenyan SMEs to manage M-Pesa payments, track transactions, and generate financial reports, integrating with Safaricom\'s M-Pesa API.',
    logo: '/logos/mpesa.svg',
    image: '/images/projects/simca-cleaning-preview.png',
    link: 'https://github.com/yourusername/mpesa-dashboard',
    slug: 'mpesa-dashboard',
    category: 'web',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Vercel', 'Render', 'GitHub Actions', 'Jest', 'Supertest', 'React Testing Library', 'JWT', 'bcrypt', 'helmet', 'rate-limiting'],
    features: [
      'M-Pesa API integration',
      'Transaction tracking and management',
      'Financial reporting dashboard',
      'SME-focused payment solutions',
      'Secure authentication system',
      'Real-time transaction monitoring'
    ],
    github: 'https://github.com/yourusername/mpesa-dashboard',
    demo: 'https://mpesa-dashboard-demo.com'
  },
  {
    title: 'Cloud-Native Task Manager',
    description: 'A collaborative task management app deployed on Kubernetes, with real-time updates, role-based access, and analytics for remote teams.',
    logo: '/logos/task-manager.svg',
    image: '/images/projects/simca-cleaning-preview.png',
    link: 'https://github.com/yourusername/cloud-task-manager',
    slug: 'cloud-task-manager',
    category: 'cloud',
    technologies: [
      'React.js', 'TypeScript', 'Chakra UI', 'Redux Toolkit', 'Socket.io-client',
      'Node.js', 'Express.js', 'PostgreSQL', 'Redis',
      'Kubernetes', 'Docker', 'AWS EKS', 'GitHub Actions', 'Vercel',
      'Jest', 'Mocha', 'React Testing Library', 'OAuth2', 'helmet', 'rate-limiting'
    ],
    features: [
      'Real-time collaborative updates',
      'Role-based access control',
      'Analytics dashboard',
      'Remote team support',
      'Kubernetes deployment',
      'OAuth2 authentication'
    ],
    github: 'https://github.com/yourusername/cloud-task-manager',
    demo: 'https://cloud-task-manager-demo.com'
  },
  {
    title: 'AI-Powered AgriTech App',
    description: 'A web and mobile app for Kenyan farmers to access AI-driven crop advice, market prices, and weather forecasts, integrating with local APIs.',
    logo: '/logos/agritech.svg',
    image: '/images/projects/simca-cleaning-preview.png',
    link: 'https://github.com/yourusername/agritech-app',
    slug: 'agritech-app',
    category: 'ai',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Python', 'FastAPI', 'MongoDB', 'Redis', 'React Native', 'TensorFlow.js', 'Hugging Face API', 'Vercel', 'Render', 'GitHub Actions', 'Pytest', 'Jest', 'React Testing Library', 'JWT', 'bcrypt', 'helmet'],
    features: [
      'AI-driven crop advice',
      'Real-time market prices',
      'Weather forecasts integration',
      'Cross-platform mobile app',
      'Local API integration',
      'Machine learning predictions'
    ],
    github: 'https://github.com/yourusername/agritech-app',
    demo: 'https://agritech-app-demo.com'
  },
  {
    title: 'SME Inventory System',
    description: 'A mobile-first inventory management app for Kenyan SMEs, with barcode scanning, stock alerts, and sales tracking.',
    logo: '/logos/inventory.svg',
    image: '/images/projects/simca-cleaning-preview.png',
    link: 'https://github.com/yourusername/sme-inventory',
    slug: 'sme-inventory',
    category: 'mobile',
    technologies: [
      'React.js', 'TypeScript', 'Material-UI', 'Redux Toolkit',
      'Node.js', 'Express.js', 'MongoDB', 'Redis',
      'React Native', 'Vercel', 'Render', 'GitHub Actions',
      'Jest', 'Supertest', 'React Testing Library'
    ],
    features: [
      'Barcode scanning',
      'Stock alerts',
      'Sales tracking',
      'Mobile-first design',
      'Cloud sync',
      'Role-based access control'
    ],
    github: 'https://github.com/yourusername/sme-inventory',
    demo: 'https://sme-inventory-demo.com'
  },
];
