import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
}

export interface SiteData {
  hero: HeroData;
  services: Service[];
  blogs: BlogPost[];
}

interface SiteDataContextType {
  siteData: SiteData;
  updateHeroData: (heroData: HeroData) => void;
  updateServices: (services: Service[]) => void;
  addBlog: (blog: Omit<BlogPost, 'id' | 'date'>) => void;
  updateBlog: (id: number, blog: Partial<BlogPost>) => void;
  deleteBlog: (id: number) => void;
}

const defaultSiteData: SiteData = {
  hero: {
    title: "Transform Your Digital Vision Into Reality",
    subtitle: "We're a cutting-edge software development agency specializing in web applications, mobile solutions, and digital transformation.",
    ctaText: "Start Your Project"
  },
  services: [
    {
      id: 1,
      title: "Custom Web Development",
      description: "Tailored web applications built with cutting-edge technologies to meet your unique business requirements.",
      icon: "Code",
      features: ['React/Next.js', 'TypeScript', 'Modern UI/UX', 'Responsive Design']
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: "Smartphone",
      features: ['iOS & Android', 'React Native', 'Flutter', 'Native Performance']
    },
    {
      id: 3,
      title: "SaaS Platform Development",
      description: "Scalable Software-as-a-Service solutions with robust architecture and seamless user experiences.",
      icon: "Cloud",
      features: ['Multi-tenant', 'Auto-scaling', 'API Integration', 'Analytics']
    },
    {
      id: 4,
      title: "API & Backend Development",
      description: "Robust backend systems and RESTful APIs that power your applications with reliability and performance.",
      icon: "Database",
      features: ['REST APIs', 'GraphQL', 'Microservices', 'Database Design']
    },
    {
      id: 5,
      title: "Digital Transformation",
      description: "Modernize your business processes with digital solutions that increase efficiency and drive growth.",
      icon: "Zap",
      features: ['Process Automation', 'Legacy Migration', 'Cloud Integration', 'AI/ML Solutions']
    },
    {
      id: 6,
      title: "Cloud Solutions",
      description: "Cloud-native applications and infrastructure solutions for scalability, security, and performance.",
      icon: "Globe",
      features: ['AWS/Azure/GCP', 'DevOps', 'Serverless', 'Container Orchestration']
    }
  ],
  blogs: [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Exploring the latest technologies and methodologies that are shaping the future of web development.",
      content: "Web development continues to evolve at a rapid pace. From AI-powered development tools to serverless architectures, the landscape is constantly changing. In this post, we explore the key trends that will define web development in 2024 and beyond. We'll dive into progressive web apps, JAMstack architecture, and the rise of edge computing. These technologies are not just buzzwords - they're practical solutions that can significantly improve user experience and developer productivity.",
      date: "2024-01-15",
      author: "Development Team"
    },
    {
      id: 2,
      title: "Building Scalable SaaS Applications: A Complete Guide",
      excerpt: "Best practices and architectural patterns for creating SaaS platforms that grow with your business.",
      content: "Creating a scalable SaaS application requires careful planning and the right architectural decisions from day one. In this comprehensive guide, we cover everything from multi-tenancy patterns to database design strategies. We'll explore how to implement features like user authentication, subscription management, and real-time notifications. Additionally, we'll discuss monitoring, logging, and deployment strategies that ensure your application can handle growth seamlessly.",
      date: "2024-01-10",
      author: "Architecture Team"
    },
    {
      id: 3,
      title: "Mobile-First Development: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first approach in modern application development.",
      content: "With mobile traffic accounting for over 50% of web usage, mobile-first development isn't just a nice-to-have - it's essential. This article explores why starting with mobile constraints leads to better overall design and user experience. We'll cover responsive design principles, performance optimization techniques, and how to ensure your applications work seamlessly across all devices. From touch-friendly interfaces to optimized loading times, every detail matters in mobile development.",
      date: "2024-01-05",
      author: "Mobile Team"
    }
  ]
};

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

export const SiteDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteData>(defaultSiteData);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('siteData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setSiteData(parsedData);
      } catch (error) {
        console.error('Error parsing saved site data:', error);
        // Use default data if parsing fails
        setSiteData(defaultSiteData);
      }
    }
  }, []);

  // Save data to localStorage whenever siteData changes
  useEffect(() => {
    localStorage.setItem('siteData', JSON.stringify(siteData));
  }, [siteData]);

  const updateHeroData = (heroData: HeroData) => {
    setSiteData(prev => ({
      ...prev,
      hero: heroData
    }));
  };

  const updateServices = (services: Service[]) => {
    setSiteData(prev => ({
      ...prev,
      services
    }));
  };

  const addBlog = (blog: Omit<BlogPost, 'id' | 'date'>) => {
    const newBlog: BlogPost = {
      ...blog,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    
    setSiteData(prev => ({
      ...prev,
      blogs: [newBlog, ...prev.blogs]
    }));
  };

  const updateBlog = (id: number, blogUpdate: Partial<BlogPost>) => {
    setSiteData(prev => ({
      ...prev,
      blogs: prev.blogs.map(blog => 
        blog.id === id ? { ...blog, ...blogUpdate } : blog
      )
    }));
  };

  const deleteBlog = (id: number) => {
    setSiteData(prev => ({
      ...prev,
      blogs: prev.blogs.filter(blog => blog.id !== id)
    }));
  };

  const value: SiteDataContextType = {
    siteData,
    updateHeroData,
    updateServices,
    addBlog,
    updateBlog,
    deleteBlog
  };

  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (context === undefined) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};