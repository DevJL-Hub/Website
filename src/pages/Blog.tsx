import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to new frameworks and tools.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      author: 'Dev JL Team',
      featured: true,
    },
    {
      title: 'Building Scalable SaaS Applications: Best Practices',
      excerpt: 'Learn the essential principles and patterns for creating SaaS applications that can grow with your business.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'SaaS',
      author: 'Dev JL Team',
      featured: true,
    },
    {
      title: 'Design Systems: Creating Consistency at Scale',
      excerpt: 'How to build and maintain design systems that ensure consistency across your digital products.',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Design',
      author: 'Dev JL Team',
      featured: false,
    },
    {
      title: 'Performance Optimization: Making Your Website Lightning Fast',
      excerpt: 'Practical techniques and tools to optimize your website performance and improve user experience.',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Performance',
      author: 'Dev JL Team',
      featured: false,
    },
    {
      title: 'The Art of Client Communication in Web Development',
      excerpt: 'Essential communication strategies for successful client relationships and project outcomes.',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Business',
      author: 'Dev JL Team',
      featured: false,
    },
    {
      title: 'Modern CSS: New Features That Will Change How You Style',
      excerpt: 'Discover the latest CSS features and how they can simplify your styling workflow.',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'CSS',
      author: 'Dev JL Team',
      featured: false,
    },
  ];

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h1 className="brand-heading mb-6">
            Blog & Insights
          </h1>
          <p className="hero-text max-w-3xl mx-auto">
            Thoughts, insights, and tutorials on web development, design, and scaling digital businesses. 
            Stay updated with the latest trends and best practices.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-16">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="card-elegant overflow-hidden">
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-muted-foreground">Article Image</div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <h2 className="section-heading text-center mb-16">
            Latest Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="card-elegant overflow-hidden">
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-muted-foreground text-sm">Article Image</div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="section-heading mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest insights, tutorials, and industry news delivered to your inbox. 
            No spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-md bg-background"
            />
            <Button className="btn-primary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;