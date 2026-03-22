import { cvLinks } from "../constants/contacts";

export const services = [
  {
    id: 'software',
    title: 'Software Development',
    subtitle: 'System & Backend Specialist',
    color: 'text-blue-500',
    bg: 'bg-blue-500',
    cvUrl: cvLinks.software,
    serviceDesc: 'Developing high-performance applications with expertise in C++ systems, Java backends, and Python automation.',
    skills: ['C++', 'Java', 'Spring Boot', 'Python', 'OpenCV', 'OOP'],
    offerings: [
      'C++ Tooling & Graphics Systems',
      'Java Spring Boot Backend Services',
      'OpenCV Image & Video Processing',
      'System Architecture & Design',
      'Desktop & Enterprise Applications'
    ],
    projects: [
      {
        title: 'E-Commerce Website Template',
        desc: 'A robust and responsive digital storefront featuring dynamic product catalogs and optimized user flows for modern online retail.',
        tech: ['React', 'JavaScript', 'HTML5', 'CSS3'],
        link: "#",
        git: "https://github.com/rfcm-git/E-Commerce-Website",
        attentionGrabber: true
      },
      {
        title: 'Generating Hexagonal Pattern',
        desc: 'A procedural graphics project demonstrating efficient rendering and mathematical tiling using ImGui and C++.',
        tech: ['C++', 'ImGui', 'OpenGL'],
        link: "#",
        git: "https://github.com/rfcm-git/Hexagonal-Pattern-using-ImGui",
        attentionGrabber: true,
        videoUrl: "/assets/Generating-Hexagonal-Pattern-Sample-Video.mp4"
      }
    ]
  },
  {
    id: 'web',
    title: 'Web Engineering',
    subtitle: 'Modern Full-Stack Transition',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500',
    cvUrl: cvLinks.web,
    serviceDesc: 'Transitioning system-level expertise into scalable web ecosystems. Specializing in Python-based backends and React frontends.',
    skills: ['Next.js', 'ReactJS', 'FastAPI', 'Flask', 'JavaScript', 'Tailwind CSS'],
    offerings: [
      'React & Next.js Single Page Apps',
      'Python (FastAPI/Flask) REST APIs',
      'Responsive & Mobile-First Design',
      'Modern State Management',
      'Full-Stack System Integration'
    ],
    projects: [
      {
        title: 'Connect 4 Dots Game',
        desc: 'A modern, interactive recreation of the classic Connect 4 game with smooth animations and responsive design.',
        tech: ['HTML5', 'Tailwind', 'JavaScript'],
        link: "https://connect4dotsgame.netlify.app/",
        git: "https://github.com/rfcm-git/Connect-4-Game",
        attentionGrabber: true
      },
      {
        title: 'Blog Web App Built with FastAPI',
        desc: 'A blog web application built with FastAPI, featuring server-side rendering, API-driven content management, and modern backend architecture.',
        tech: ['FastAPI', 'PostgreSQL/SQLite', 'Python', 'SQLAlchemy', 'JWT', 'OAuth2', 'Jinja2', 'HTML5', 'Tailwind', 'JavaScript', 'Bootstrap', 'lucide-react', 'Pydantic'],
        link: "https://fastapi-blog-website-gorb.onrender.com",
        git: "https://github.com/rfcm-git/FastAPI-blog-website",
        attentionGrabber: true
      }
    ]
  },
  {
    id: 'data',
    title: 'Data & AI Automation',
    subtitle: 'BI, Databases & Workflow AI',
    color: 'text-purple-500',
    bg: 'bg-purple-500',
    cvUrl: cvLinks.data,
    serviceDesc: 'Leveraging MySQL, Power BI, and automation tools like n8n to transform raw data into actionable business insights.',
    skills: ['MySQL', 'Power BI', 'Excel/VBA', 'n8n', 'Python', 'OpenAI'],
    offerings: [
      'Advanced n8n Workflow Automation',
      'MySQL & MS Access DB Engineering',
      'AI Agent & LLM Orchestration',
      'Power BI Insight Dashboards',
      'Data Cleaning & ETL Pipelines'
    ],
    projects: [
      {
        title: 'Automated AI Data Pipeline',
        desc: 'End-to-end automation using n8n to ingest, process with AI, and sync to databases.',
        tech: ['n8n', 'OpenAI', 'MySQL'],
        link: "#"
      },
      {
        title: 'BI Performance Dashboard',
        desc: 'Interactive Power BI reports analyzing operational KPIs from multiple data sources.',
        tech: ['Power BI', 'Excel', 'VBA'],
        link: "#"
      }
    ]
  }
];