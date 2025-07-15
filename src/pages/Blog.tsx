import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the cutting-edge technologies and methodologies that are shaping the future of web development.',
    author: 'Alex Rivera',
    date: 'March 15, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    tags: ['Web Development', 'Technology', 'Future Trends']
  };

  const blogPosts = [
    {
      title: 'Building Scalable SaaS Applications with Modern Architecture',
      excerpt: 'Learn how to design and build SaaS applications that can scale from hundreds to millions of users.',
      author: 'Sarah Chen',
      date: 'March 12, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['SaaS', 'Architecture', 'Scalability']
    },
    {
      title: 'Mobile App Development: Native vs Cross-Platform in 2024',
      excerpt: 'A comprehensive comparison of native and cross-platform development approaches.',
      author: 'Marcus Johnson',
      date: 'March 10, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Mobile Development', 'React Native', 'Flutter']
    },
    {
      title: 'Cloud Migration Strategies for Enterprise Applications',
      excerpt: 'Best practices for migrating legacy enterprise applications to modern cloud infrastructure.',
      author: 'Emily Rodriguez',
      date: 'March 8, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Cloud Computing', 'Enterprise', 'Migration']
    },
    {
      title: 'API Design Best Practices for Modern Applications',
      excerpt: 'Essential guidelines for creating robust, scalable, and developer-friendly APIs.',
      author: 'David Kim',
      date: 'March 5, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['API Development', 'Best Practices', 'Backend']
    },
    {
      title: 'The Rise of Serverless: When and How to Use It',
      excerpt: 'Understanding serverless architecture and its practical applications in modern development.',
      author: 'Lisa Wang',
      date: 'March 3, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Serverless', 'Cloud', 'Architecture']
    },
    {
      title: 'UX/UI Trends Shaping Digital Products in 2024',
      excerpt: 'Discover the design trends that are influencing user experience and interface design.',
      author: 'Michael Brown',
      date: 'March 1, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['UI/UX', 'Design', 'Trends']
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile', 'Cloud', 'AI/ML', 'Design'];

  return (
    <div className="min-h-screen bg-gradient-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">
              Tech Insights & Updates
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, best practices, and insights 
              from the world of software development and technology.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  index === 0 
                    ? 'bg-gradient-primary text-primary-foreground shadow-cinematic' 
                    : 'bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-cinematic'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="bg-card rounded-lg overflow-hidden shadow-cinematic hover:shadow-elevated transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="flex items-center text-primary text-sm">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {featuredPost.date}
                      </span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Button variant="ghost" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg overflow-hidden shadow-cinematic hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;