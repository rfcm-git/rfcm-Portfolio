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
    skills: ['C++', 'Java', 'Spring Boot', 'OpenGL', 'Python', 'OpenCV', 'OOP'],
    offerings: [
      'C++ Tooling & Graphics Systems',
      'Java Spring Boot Backend Services',
      'OpenCV Image & Video Processing',
      'System Architecture & Design',
      'Desktop & Enterprise Applications'
    ],
    projects: [
      ,
      {
        id: 'p1',
        title: 'Hexagonal Pattern Visualization',
        desc: 'A real-time C++ visualization tool that renders interactive hexagonal grid patterns using Dear ImGui. The project demonstrates clean architectural design through the implementation of Hexagonal Architecture, ensuring a clear separation between core logic and UI rendering.',
        tech: ['C++', 'Dear ImGui', 'OpenGL', 'STL'],
        keyFeatures: [ 'Real-time hexagonal grid rendering' , 'Interactive controls via Dear ImGui', 'Clean architecture (Hexagonal Architecture pattern)', 'Immediate-mode GUI for fast updates', 'Modular and scalable code structure', 'Efficient geometric computation of hex grids' ],
        link: "#",
        videoUrl: "assets/hex-pattern/video-sample.mp4",
        git: "https://github.com/rfcm-git/Hexagonal-Pattern-using-ImGui",
        attentionGrabber: true,
        tooLongToRender: false,
        previewType: 'image',
        images: [
          "assets/hex-pattern/profile.png", // geometric grid
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1000&auto=format&fit=crop", // code visualization
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"  // dev workspace
        ]
      }
    ]
  },
  {
    id: 'web',
    title: 'Full-Stack Development',
    subtitle: 'Backend-Focused | Scalable API & System Design',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500',
    cvUrl: cvLinks.web,
    serviceDesc: 'Designing and building scalable, API-driven systems with Python, focusing on clean architecture, performance, and reliability—paired with modern React-based frontend integration.',
    skills: [
      'FastAPI',
      'Flask',
      'Python',
      'PostgreSQL',
      'SQLite',
      'Pydantic',
      'JWT',
      'OAuth2',
      'Redis',
      'Docker',
      'React',
      'Next.js',
      'JavaScript',
      'Tailwind CSS'
    ],
    offerings: [
      'High-Performance REST APIs with FastAPI',
      'Data Validation & Serialization (Pydantic)',
      'Authentication Systems (JWT, OAuth2)',
      'Asynchronous Processing & Background Tasks',
      'Caching & Performance Optimization (Redis)',
      'Database Design, Indexing & Query Optimization',
      'Containerization & Deployment with Docker',
      'Scalable Backend Architecture & System Design'
    ],
    projects: [
      {
        id: 'p2',
        title: 'E-Commerce Website Template',
        desc: 'A robust and responsive digital storefront featuring dynamic product catalogs and optimized user flows for modern online retail.',
        tech: ['React', 'JavaScript', 'HTML5', 'CSS3'],
        link: "#",
        git: "https://github.com/rfcm-git/E-Commerce-Website",
        attentionGrabber: true,
        tooLongToRender: true,
        previewType: 'link',
        images: [
          "assets/e-commerse-web/profile.png",
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: 'p3',
        title: 'Connect 4 Dots Game',
        desc: 'A modern, interactive recreation of the classic Connect 4 game with smooth animations and responsive design.',
        tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
        link: "https://connect4dotsgame.netlify.app/",
        git: "https://github.com/rfcm-git/Connect-4-Game",
        attentionGrabber: true,
        tooLongToRender: false,
        previewType: 'link',
        images: [
          "/assets/connect-4-dots/profile.png",
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: 'p4',
        title: 'Blog Web App Built with FastAPI',
        desc: 'A production-ready blog platform built with FastAPI that supports secure authentication using JWT and OAuth, along with user profile management including image uploads. The system exposes RESTful APIs for content management and demonstrates modern backend development practices.',
        tech: ['Python', 'FastAPI', 'JWT (JSON Web Tokens)', 'OAuth 2.0', 'Pydantic', 'Uvicorn', 'SQLite / PostgreSQL', 'File Upload Handling', 'Jinja2 / HTML'],
        link: "https://fastapi-blog-website-gorb.onrender.com",
        git: "https://github.com/rfcm-git/FastAPI-blog-website",
        keyFeatures: [ 'Blog CRUD operations (posts management)', 'JWT authentication for secure API access', 
          'OAuth 2.0 login integration', 'User registration and login system', 'Profile image upload support' , 'File handling using multipart/form-data',
          'Interactive API documentation (/docs)', 'Async, high-performance endpoints', 'Clean and modular architecture' ],
        attentionGrabber: true,
        tooLongToRender: true,
        previewType: 'link',
        images: [
          "/assets/blog-website/profile.png",
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
        ]
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
        id: 'p5',
        title: 'Automated AI Data Pipeline',
        desc: 'End-to-end automation using n8n to ingest, process with AI, and sync to databases.',
        tech: ['n8n', 'OpenAI', 'MySQL'],
        link: "#",
        attentionGrabber: true,
        tooLongToRender: false,
        previewType: 'link',
        images: [
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
        ]
      },
      {
        id: 'p6',
        title: 'BI Performance Dashboard',
        desc: 'Interactive Power BI reports analyzing operational KPIs from multiple data sources.',
        tech: ['Power BI', 'Excel', 'VBA'],
        link: "#",
        attentionGrabber: true,
        tooLongToRender: false,
        previewType: 'link',
        images: [
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
        ]
      }
    ]
  }
];